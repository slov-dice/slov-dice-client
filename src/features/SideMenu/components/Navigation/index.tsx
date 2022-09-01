import { useNavigate } from 'react-router-dom'

import { data } from './data'
import * as S from './styles'

import { NavigationItem, NavigationDivider } from '../NavigationItem'

import {
  E_CustomAction,
  E_TaskItemActionType,
  E_TaskItemVisibility,
  T_TaskItemActionPayload,
} from 'features/Header/models'
import { E_Modals } from 'features/Modals/models'
import { openModal } from 'features/Modals/slice'
import { E_Panels } from 'features/SidePanel/models'
import { openSidePanel } from 'features/SidePanel/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Routes } from 'models/routes'
import { authAPI } from 'services/auth'
import { logout } from 'store/profile'
import { E_Icon } from 'utils/helpers/icons'
import { LocalStorage } from 'utils/helpers/localStorage'

interface NavigationProps {
  toggleMenu: () => void
}

export const Navigation = ({ toggleMenu }: NavigationProps) => {
  const navigate = useNavigate()
  const dispatch = useStoreDispatch()
  const { statuses, roomId, isRoomPageOpen } = useStoreSelector((state) => ({
    statuses: state.profile.statuses,
    roomId: state.room.id,
    isRoomPageOpen: state.roomPage.isOpen,
  }))

  const [fetchLogout] = authAPI.useLogoutMutation()

  const handleAction = (type: E_TaskItemActionType, payload: T_TaskItemActionPayload) => () => {
    toggleMenu()
    if (type === E_TaskItemActionType.push) {
      navigate(payload as E_Routes)
    } else if (type === E_TaskItemActionType.replace) {
      if (payload === E_CustomAction.logout) {
        const authType = LocalStorage.getAuthType()
        dispatch(logout({ roomId }))
        fetchLogout({ from: authType })
        navigate('/')
        return
      }
      navigate(payload as E_Routes)
    } else if (type === E_TaskItemActionType.modal) {
      dispatch(openModal(payload as E_Modals))
    } else if (type === E_TaskItemActionType.panel) {
      dispatch(openSidePanel(payload as E_Panels))
    }
  }

  return (
    <S.Navigation>
      {data.map((item) => {
        if (statuses.isAuth && item.visibility.includes(E_TaskItemVisibility.authenticated)) {
          if (isRoomPageOpen && item.visibility.includes(E_TaskItemVisibility.inRoom)) {
            if (item.icon === E_Icon.divider) return <NavigationDivider key={item.name} />
            return (
              <NavigationItem
                key={item.name}
                onClick={handleAction(item.actionType, item.actionPayload)}
                name={item.name}
                icon={item.icon}
              />
            )
          } else if (!isRoomPageOpen && item.visibility.includes(E_TaskItemVisibility.inLobby)) {
            if (item.icon === E_Icon.divider) return <NavigationDivider key={item.name} />
            if (item.icon === E_Icon.enterRoom && !statuses.inRoom) return
            if ((item.icon === E_Icon.create || item.icon === E_Icon.join) && statuses.inRoom)
              return
            return (
              <NavigationItem
                key={item.name}
                onClick={handleAction(item.actionType, item.actionPayload)}
                name={item.name}
                icon={item.icon}
              />
            )
          }
        }
        if (!statuses.isAuth && item.visibility.includes(E_TaskItemVisibility.unAuthenticated)) {
          return (
            <NavigationItem
              key={item.name}
              onClick={handleAction(item.actionType, item.actionPayload)}
              name={item.name}
              icon={item.icon}
            />
          )
        }
        if (item.visibility.includes(E_TaskItemVisibility.all)) {
          return (
            <NavigationItem
              key={item.name}
              onClick={handleAction(item.actionType, item.actionPayload)}
              name={item.name}
              icon={item.icon}
            />
          )
        }
      })}
    </S.Navigation>
  )
}
