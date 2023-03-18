import { isMobile } from 'react-device-detect'
import { useNavigate } from 'react-router-dom'

import { data } from './data'

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
import { tileManagerActions } from 'features/TileManager/slice'
import { E_Window } from 'features/WindowManager/models'
import { windowManagerActions } from 'features/WindowManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Routes } from 'models/routes'
import { leaveRoom, logout } from 'store/profile'
import { roomActions } from 'store/room'
import { E_AppIcon } from 'utils/icons/app'

interface NavigationProps {
  toggleMenu: () => void
}

export const Navigation = ({ toggleMenu }: NavigationProps) => {
  const navigate = useNavigate()
  const dispatch = useStoreDispatch()
  const { statuses, roomId, isRoomPageOpen } = useStoreSelector((store) => ({
    statuses: store.profile.statuses,
    roomId: store.room.id,
    isRoomPageOpen: store.roomPage.isOpen,
  }))

  const handleAction = (item: I_TaskItem) => () => {
    toggleMenu()
    if (item.actionType === E_TaskItemActionType.push) {
      navigate(item.actionPayload as E_Routes)
    }

    if (item.actionType === E_TaskItemActionType.replace) {
      if (item.actionPayload === E_CustomAction.logout) {
        dispatch(logout({ roomId }))
        return
      }
      navigate(item.actionPayload as E_Routes)
    }

    if (item.actionType === E_TaskItemActionType.modal) {
      dispatch(openModal(item.actionPayload as E_Modal))
    }

    if (item.actionType === E_TaskItemActionType.window) {
      if (isMobile) {
        dispatch(tileManagerActions.openTile(item.actionPayload as E_Window))
      } else {
        dispatch(windowManagerActions.openWindow(item.actionPayload as E_Window))
      }
    }

    if (item.actionType === E_TaskItemActionType.panel) {
      dispatch(openSidePanel(item.actionPayload as E_Panels))
    }

    if (item.icon === E_AppIcon.leaveRoom) {
      dispatch(roomActions.emitLeaveRoom())
      dispatch(leaveRoom())
      navigate('/lobby')
    }

    if (item.icon === E_AppIcon.enterRoom) {
      navigate(`/room/${roomId}`)
    }
  }

  return (
    <ul>
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
    </ul>
  )
}
