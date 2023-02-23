import * as S from './styles'

import {
  E_TaskItemActionType,
  E_TaskItemVisibility,
  T_TaskItemActionPayload,
} from 'features/Header/models'
import { changeToolbarItemIcon } from 'features/Header/slice'
import { E_Modal } from 'features/ModalManager/models'
import { openModal } from 'features/ModalManager/slice'
import { sideMenuActions } from 'features/SideMenu/slice'
import { E_Panels } from 'features/SidePanel/models'
import { closeSidePanel, openSidePanel } from 'features/SidePanel/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { FullScreen } from 'utils/helpers/fullScreen'
import { E_AppIcon, getAppIcon } from 'utils/icons/app'

export const Toolbar = () => {
  const { toolbar, sidePanel, isAuth } = useStoreSelector((store) => ({
    toolbar: store.header.toolbar,
    sidePanel: store.sidePanel.panel,
    isAuth: store.profile.statuses.isAuth,
  }))
  const dispatch = useStoreDispatch()

  const handleAction = (type: E_TaskItemActionType, payload: T_TaskItemActionPayload) => () => {
    if (type === E_TaskItemActionType.modal) {
      dispatch(openModal(payload as E_Modal))
    } else if (type === E_TaskItemActionType.panel) {
      if (sidePanel === payload) {
        dispatch(closeSidePanel())
        return
      }
      dispatch(openSidePanel(payload as E_Panels))
      dispatch(sideMenuActions.closeSideMenu())
    } else if (type === E_TaskItemActionType.fullScreen) {
      FullScreen.toggle()
      const icon = FullScreen.getValue() ? E_AppIcon.expand : E_AppIcon.compress
      dispatch(changeToolbarItemIcon({ name: 'full-screen', icon }))
    }
  }

  return (
    <S.Toolbar>
      {toolbar.map((item) => {
        if (isAuth && item.visibility.includes(E_TaskItemVisibility.authenticated))
          return (
            <ToolbarItem
              key={item.name}
              icon={item.icon}
              onClick={handleAction(item.actionType, item.actionPayload)}
            />
          )

        if (item.visibility.includes(E_TaskItemVisibility.all))
          return (
            <ToolbarItem
              key={item.name}
              icon={item.icon}
              onClick={handleAction(item.actionType, item.actionPayload)}
            />
          )
      })}
    </S.Toolbar>
  )
}

interface I_ToolbarItemProps {
  icon: E_AppIcon
  onClick: () => void
}

const ToolbarItem = ({ icon, onClick }: I_ToolbarItemProps) => (
  <S.ToolbarItem $isDivider={icon === E_AppIcon.divider} onClick={onClick}>
    {getAppIcon(icon)}
  </S.ToolbarItem>
)
