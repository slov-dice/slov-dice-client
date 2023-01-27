import { useState, MouseEvent, useMemo, ChangeEvent } from 'react'

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
import { T_DocId } from 'models/shared/game/textEditor'
import { roomActions } from 'store/room'
import { getDoc } from 'utils/game/effects'

export const TextEditorContent = () => {
  const dispatch = useStoreDispatch()
  const { openedDocs, overlays, docs } = useStoreSelector((store) => ({
    openedDocs: store.gameTextEditor.opened,
    overlays: store.gameTextEditor.overlays,
    docs: store.room.game.textEditor.window.docs,
  }))

  const [activeDocId, setActiveDocId] = useState('')

  const handleOpenGridDocsOverlay = () => {
    dispatch(
      gameTextEditorActions.openWindowOverlay({ name: E_WindowOverlay.gridDocs, isOpen: true }),
    )
  }

  const handleActiveDoc = (docId: T_DocId) => () => {
    setActiveDocId(docId)
  }

  const handleRemoveDocFromOpened = (e: MouseEvent<HTMLDivElement>, docId: T_DocId) => {
    e.stopPropagation()

    dispatch(gameTextEditorActions.closeDoc(docId))
    if (docId === activeDocId) {
      setActiveDocId('')
    }
  }

  const handleChangeDocContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      roomActions.emitUpdateDoc({ docId: activeDocId, field: 'content', value: e.target.value }),
    )
  }

  const activeDoc = useMemo(() => {
    if (activeDocId) {
      return getDoc(docs, activeDocId)
    }
    return null
  }, [activeDocId, docs])

  return (
    <WindowOverlayManagerProvider location={E_Window.characters}>
      <WindowOverlayManager overlays={overlays} />
      <S.TextEditorWrapper>
        <S.TopSection>
          <S.TabMore onClick={handleOpenGridDocsOverlay}>
            <MoreIcon />
          </S.TabMore>
          {openedDocs.map((docId) => {
            const doc = getDoc(docs, docId)
            if (!doc) return null
            return (
              <S.TabFile
                isActive={activeDocId === docId}
                key={docId}
                onClick={handleActiveDoc(docId)}
              >
                <S.Close
                  isActive={activeDocId === docId}
                  onClick={(e) => handleRemoveDocFromOpened(e, docId)}
                >
                  <CloseIcon />
                </S.Close>
                <span>{doc.title}</span>
              </S.TabFile>
            )
          })}
        </S.TopSection>

        <S.BottomSection>
          {activeDoc && <textarea value={activeDoc.content} onChange={handleChangeDocContent} />}
        </S.BottomSection>
      </S.TextEditorWrapper>
    </WindowOverlayManagerProvider>
  )
}
