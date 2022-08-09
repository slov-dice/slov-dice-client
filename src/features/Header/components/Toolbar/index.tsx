import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import {
  E_Modals,
  E_Panels,
  E_TaskItemActionType,
  E_TaskItemVisibility,
  T_TaskItemActionPayload,
} from 'models/ui'
import { changeToolbarItemIcon, closeSidePanel, openModal, openSidePanel } from 'store/ui'
import { FullScreen } from 'utils/helpers/fullScreen'
import { E_Icon, getIcon } from 'utils/helpers/icons'

export const Toolbar = () => {
  const { toolbar, sidePanel, isAuth } = useStoreSelector((state) => ({
    toolbar: state.ui.toolbar,
    sidePanel: state.ui.sidePanel,
    isAuth: state.profile.statuses.isAuth,
  }))
  const dispatch = useStoreDispatch()

  const handleAction = (type: E_TaskItemActionType, payload: T_TaskItemActionPayload) => () => {
    if (type === E_TaskItemActionType.modal) {
      dispatch(openModal(payload as E_Modals))
    } else if (type === E_TaskItemActionType.panel) {
      if (sidePanel === payload) {
        dispatch(closeSidePanel())
        return
      }
      dispatch(openSidePanel(payload as E_Panels))
    } else if (type === E_TaskItemActionType.fullScreen) {
      FullScreen.toggle()
      // НЕ - потому что toggle возвращает promise
      const icon = !FullScreen.getValue() ? E_Icon.compress : E_Icon.expand
      dispatch(changeToolbarItemIcon({ name: 'full-screen', icon }))
    }
  }
  return (
    <S.Toolbar>
      {toolbar.map((item) => {
        if (isAuth && item.visibility === E_TaskItemVisibility.authenticated)
          return (
            <ToolbarItem
              key={item.name}
              icon={item.icon}
              onClick={handleAction(item.actionType, item.actionPayload)}
            />
          )

        if (item.visibility === E_TaskItemVisibility.all)
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
  icon: E_Icon
  onClick: () => void
}

const ToolbarItem = ({ icon, onClick }: I_ToolbarItemProps) => (
  <S.ToolbarItem $isDivider={icon === E_Icon.divider} onClick={onClick}>
    {getIcon(icon)}
  </S.ToolbarItem>
)
