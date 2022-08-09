import { useNavigate } from 'react-router-dom'

import { data } from './data'
import * as S from './styles'
import { navigationVariants } from './variants'

import { NavigationItem, NavigationDivider } from '../NavigationItem'

import { E_Modals } from 'features/Modals/models'
import { openModal } from 'features/Modals/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Routes } from 'models/routes'
import {
  E_CustomAction,
  E_Panels,
  E_TaskItemActionType,
  E_TaskItemVisibility,
  T_TaskItemActionPayload,
} from 'models/ui'
import { logout } from 'store/profile'
import { openSidePanel } from 'store/ui'
import { E_Icon } from 'utils/helpers/icons'

interface NavigationProps {
  toggleMenu: () => void
}

export const Navigation = ({ toggleMenu }: NavigationProps) => {
  const navigate = useNavigate()
  const dispatch = useStoreDispatch()
  const profile = useStoreSelector((state) => state.profile)

  const handleAction = (type: E_TaskItemActionType, payload: T_TaskItemActionPayload) => () => {
    toggleMenu()
    if (type === E_TaskItemActionType.push) {
      navigate(payload as E_Routes)
    } else if (type === E_TaskItemActionType.replace) {
      if (payload === E_CustomAction.logout) {
        dispatch(logout())
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
    <S.Navigation variants={navigationVariants}>
      {data.map((item) => {
        if (profile.statuses.isAuth && item.visibility === E_TaskItemVisibility.authenticated) {
          if (item.icon === E_Icon.divider) return <NavigationDivider key={item.name} />
          return (
            <NavigationItem
              key={item.name}
              onClick={handleAction(item.actionType, item.actionPayload)}
              name={item.name}
              icon={item.icon}
            />
          )
        }
        if (!profile.statuses.isAuth && item.visibility === E_TaskItemVisibility.unAuthenticated) {
          return (
            <NavigationItem
              key={item.name}
              onClick={handleAction(item.actionType, item.actionPayload)}
              name={item.name}
              icon={item.icon}
            />
          )
        }
        if (item.visibility === E_TaskItemVisibility.all) {
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
