import { useNavigate } from 'react-router-dom'

import { data } from './data'
import * as S from './styles'

import { NavigationItem, NavigationDivider } from '../NavigationItem'

import {
  E_CustomAction,
  E_TaskItemActionType,
  E_TaskItemVisibility,
  I_TaskItem,
} from 'features/Header/models'
import { E_Modal } from 'features/ModalManager/models'
import { openModal } from 'features/ModalManager/slice'
import { E_Panels } from 'features/SidePanel/models'
import { openSidePanel } from 'features/SidePanel/slice'
import { E_Window } from 'features/WindowManager/models'
import { useActions } from 'hooks/useActions'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Routes } from 'models/routes'
import { authAPI } from 'services/auth'
import { leaveRoom, logout } from 'store/profile'
import { emitLeaveRoom } from 'store/room'
import { E_AppIcon } from 'utils/helpers/icons/app'
import { LocalStorage } from 'utils/helpers/localStorage'

interface NavigationProps {
  toggleMenu: () => void
}

export const Navigation = ({ toggleMenu }: NavigationProps) => {
  const navigate = useNavigate()
  const dispatch = useStoreDispatch()
  const { openWindow } = useActions()
  const { statuses, roomId, isRoomPageOpen } = useStoreSelector((state) => ({
    statuses: state.profile.statuses,
    roomId: state.room.id,
    isRoomPageOpen: state.roomPage.isOpen,
  }))

  const [fetchLogout] = authAPI.useLogoutMutation()

  const handleAction = (item: I_TaskItem) => () => {
    toggleMenu()
    if (item.actionType === E_TaskItemActionType.push) {
      navigate(item.actionPayload as E_Routes)
    }

    if (item.actionType === E_TaskItemActionType.replace) {
      if (item.actionPayload === E_CustomAction.logout) {
        const authType = LocalStorage.getAuthType()
        dispatch(logout({ roomId }))
        fetchLogout({ from: authType })
        navigate('/')
        return
      }
      navigate(item.actionPayload as E_Routes)
    }

    if (item.actionType === E_TaskItemActionType.modal) {
      dispatch(openModal(item.actionPayload as E_Modal))
    }

    if (item.actionType === E_TaskItemActionType.window) {
      openWindow(item.actionPayload as E_Window)
    }

    if (item.actionType === E_TaskItemActionType.panel) {
      dispatch(openSidePanel(item.actionPayload as E_Panels))
    }

    if (item.icon === E_AppIcon.leaveRoom) {
      dispatch(emitLeaveRoom())
      dispatch(leaveRoom())
      navigate('/lobby')
    }

    if (item.icon === E_AppIcon.enterRoom) {
      navigate(`/room/${roomId}`)
    }
  }

  return (
    <S.Navigation>
      {data.map((item) => {
        if (statuses.isAuth && item.visibility.includes(E_TaskItemVisibility.authenticated)) {
          if (isRoomPageOpen && item.visibility.includes(E_TaskItemVisibility.inRoom)) {
            if (item.icon === E_AppIcon.divider) return <NavigationDivider key={item.name} />
            return (
              <NavigationItem
                key={item.name}
                onClick={handleAction(item)}
                name={item.name}
                icon={item.icon}
              />
            )
          } else if (!isRoomPageOpen && item.visibility.includes(E_TaskItemVisibility.inLobby)) {
            if (item.icon === E_AppIcon.divider) return <NavigationDivider key={item.name} />
            if (item.icon === E_AppIcon.enterRoom && !statuses.inRoom) return
            if ((item.icon === E_AppIcon.create || item.icon === E_AppIcon.join) && statuses.inRoom)
              return
            return (
              <NavigationItem
                key={item.name}
                onClick={handleAction(item)}
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
              onClick={handleAction(item)}
              name={item.name}
              icon={item.icon}
            />
          )
        }
        if (item.visibility.includes(E_TaskItemVisibility.all)) {
          return (
            <NavigationItem
              key={item.name}
              onClick={handleAction(item)}
              name={item.name}
              icon={item.icon}
            />
          )
        }
      })}
    </S.Navigation>
  )
}
