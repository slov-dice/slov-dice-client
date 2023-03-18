import { tileManagerActions } from './slice'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import DividerIcon from 'assets/icons/app/divider.svg'
import SettingsIcon from 'assets/icons/app/gear.svg'
import { E_Modal } from 'features/ModalManager/models'
import { modalManagerActions } from 'features/ModalManager/slice'
import { windowContentComponents, windowHead } from 'features/WindowManager/components'
import { E_Window } from 'features/WindowManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { getAppIcon } from 'utils/icons/app'

export const TileManager = () => {
  const dispatch = useStoreDispatch()
  const { tiles } = useStoreSelector((store) => ({
    tiles: store.tileManager.tiles,
    language: store.app.language,
  }))

  if (!tiles) {
    return <></>
  }

  const handleOpenSettings = (settings: E_Modal) => () => {
    if (settings) {
      dispatch(modalManagerActions.openModal(settings))
    }
  }

  const handleClose = (tile: E_Window) => () => {
    dispatch(tileManagerActions.closeTile(tile))
  }

  return (
    <div style={{ height: '100%' }}>
      {tiles.map((tile, index) => {
        const windowHeadProps = windowHead[tile]
        const WindowContentComponent = windowContentComponents[tile]

        return (
          <S.Tile key={tile} visible={index === 0}>
            <S.TileHeader>
              <S.TileHeaderLabel>
                <span>{getAppIcon(windowHeadProps.icon)}</span>
                <span>{t(windowHeadProps.title)}</span>
              </S.TileHeaderLabel>
              <S.TileControls>
                {windowHeadProps.settings && (
                  <>
                    <S.Control onMouseDown={handleOpenSettings(windowHeadProps.settings)}>
                      <SettingsIcon />
                    </S.Control>
                    <S.Control $isDivider>
                      <DividerIcon />
                    </S.Control>
                  </>
                )}
                <S.Control onClick={handleClose(tile)}>
                  <CloseIcon />
                </S.Control>
              </S.TileControls>
            </S.TileHeader>
            <S.TileBody>
              <WindowContentComponent />
            </S.TileBody>
          </S.Tile>
        )
      })}
    </div>
  )
}
