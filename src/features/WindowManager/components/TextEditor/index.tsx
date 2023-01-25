import { gameTextEditorActions } from './slice'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import MoreIcon from 'assets/icons/app/grip-dots.svg'
import { E_Window } from 'features/WindowManager/models'
import { WindowOverlayManager } from 'features/WindowOverlayManager'
import { WindowOverlayManagerProvider } from 'features/WindowOverlayManager/context'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const TextEditorContent = () => {
  const dispatch = useStoreDispatch()
  const { openedDocs, overlays } = useStoreSelector((store) => ({
    openedDocs: store.gameTextEditor.opened,
    overlays: store.gameTextEditor.overlays,
  }))

  const handleOpenGridDocsOverlay = () => {
    dispatch(
      gameTextEditorActions.openWindowOverlay({ name: E_WindowOverlay.gridDocs, isOpen: true }),
    )
  }

  return (
    <WindowOverlayManagerProvider location={E_Window.characters}>
      <WindowOverlayManager overlays={overlays} />
      <S.TextEditorWrapper>
        <S.TopSection>
          <S.TabMore onClick={handleOpenGridDocsOverlay}>
            <MoreIcon />
          </S.TabMore>
          {openedDocs.map((docId) => (
            <S.TabFile key={docId}>
              <S.Close>
                <CloseIcon />
              </S.Close>
              <span>{docId}</span>
            </S.TabFile>
          ))}
        </S.TopSection>
        <S.BottomSection>
          <textarea />
        </S.BottomSection>
      </S.TextEditorWrapper>
    </WindowOverlayManagerProvider>
  )
}
