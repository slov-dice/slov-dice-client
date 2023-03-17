import { tileManagerActions } from './slice'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import DividerIcon from 'assets/icons/app/divider.svg'
import SettingsIcon from 'assets/icons/app/gear.svg'
import { modalManagerActions } from 'features/ModalManager/slice'
import { windowContentComponents, windowHead } from 'features/WindowManager/components'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { getAppIcon } from 'utils/icons/app'

export const TileManager = () => {
  const dispatch = useStoreDispatch()
  const activeTile = useStoreSelector((store) => store.tileManager.tiles[0])

  const windowHeadProps = windowHead[activeTile]
  const WindowContentComponent = windowContentComponents[activeTile]

  const handleOpenSettings = () => {
    if (windowHeadProps.settings) {
      dispatch(modalManagerActions.openModal(windowHeadProps.settings))
    }
  }

  const handleClose = () => {
    dispatch(tileManagerActions.closeTile(activeTile))
  }

  return (
    <S.Tile>
      <S.TileHeader>
        <S.TileHeaderLabel>
          <span>{getAppIcon(windowHeadProps.icon)}</span>
          <span>{t(windowHeadProps.title)}</span>
        </S.TileHeaderLabel>
        <S.TileControls>
          {windowHeadProps.settings && (
            <>
              <S.Control onMouseDown={handleOpenSettings}>
                <SettingsIcon />
              </S.Control>
              <S.Control $isDivider>
                <DividerIcon />
              </S.Control>
            </>
          )}
          <S.Control onClick={handleClose}>
            <CloseIcon />
          </S.Control>
        </S.TileControls>
      </S.TileHeader>
      <S.TileBody>
        <WindowContentComponent />
      </S.TileBody>
    </S.Tile>
  )
}
