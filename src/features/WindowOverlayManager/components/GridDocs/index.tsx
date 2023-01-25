import { useCallback } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { gameTextEditorActions } from 'features/WindowManager/components/TextEditor/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'

export const GridDocsOverlay = () => {
  const dispatch = useStoreDispatch()

  const handleClose = useCallback(() => {
    dispatch(gameTextEditorActions.closeWindowOverlay(E_WindowOverlay.gridDocs))
  }, [dispatch])

  return (
    <div>
      <S.OverlayHeader>
        <span>{t('gridDocsOverlay.title')}</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>docs</S.OverlayContent>
    </div>
  )
}
