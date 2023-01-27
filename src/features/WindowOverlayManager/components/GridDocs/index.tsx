import Tippy from '@tippyjs/react'
import { ChangeEvent, useCallback, useState } from 'react'

import * as S from './styles'

import CheckIcon from 'assets/icons/app/check.svg'
import CloseIcon from 'assets/icons/app/close.svg'
import PlusIcon from 'assets/icons/app/plus.svg'
import TrashIcon from 'assets/icons/app/trash.svg'
import { EditableText, EditableTextarea } from 'components/game'
import { TextareaField, TextField } from 'components/InputFields'
import { gameTextEditorActions } from 'features/WindowManager/components/TextEditor/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { T_DocId } from 'models/shared/game/textEditor'
import { roomActions } from 'store/room'
import * as C from 'styles/components'

export const GridDocsOverlay = () => {
  const dispatch = useStoreDispatch()
  const docs = useStoreSelector((store) => store.room.game.textEditor.window.docs)

  const [newDoc, setNewDoc] = useState({ title: '', description: '' })

  const handleChangeDocTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewDoc((prev) => ({ ...prev, title: e.target.value }))
  }

  const handleChangeDocDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewDoc((prev) => ({ ...prev, description: e.target.value }))
  }

  const handleCreateDoc = () => {
    dispatch(roomActions.emitCreateDoc({ title: newDoc.title, description: newDoc.description }))
    setNewDoc({ title: '', description: '' })
  }

  const handleUpdateDocTitle = (value: string, docId: T_DocId) => {
    dispatch(roomActions.emitUpdateDoc({ docId, value, field: 'title' }))
  }
  const handleUpdateDocDescription = (value: string, docId: T_DocId) => {
    dispatch(roomActions.emitUpdateDoc({ docId, value, field: 'description' }))
  }

  const handleRemoveDoc = (docId: T_DocId) => () => {
    dispatch(roomActions.emitRemoveDoc({ docId }))
  }

  const handleAddDocToOpened = (docId: T_DocId) => () => {
    dispatch(gameTextEditorActions.openDoc(docId))
  }

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
      <S.OverlayContent>
        {docs.map((doc) => (
          <S.DocCard key={doc.id}>
            <EditableText
              value={doc.title}
              onChange={(value) => handleUpdateDocTitle(value, doc.id)}
            />
            <EditableTextarea
              value={doc.description}
              onChange={(value) => handleUpdateDocDescription(value, doc.id)}
            />
            <S.DocCardActions justify='space-between'>
              <Tippy content='Удалить файл'>
                <C.Control onClick={handleRemoveDoc(doc.id)}>
                  <TrashIcon />
                </C.Control>
              </Tippy>

              <Tippy content='Добавить в просмотр'>
                <C.Control onClick={handleAddDocToOpened(doc.id)}>
                  <PlusIcon />
                </C.Control>
              </Tippy>
            </S.DocCardActions>
          </S.DocCard>
        ))}
        <S.DocCard>
          <TextField
            placeholder='Название'
            fullWidth
            value={newDoc.title}
            onChange={handleChangeDocTitle}
          />
          <TextareaField
            placeholder='Описание'
            fullWidth
            value={newDoc.description}
            onChange={handleChangeDocDescription}
          />
          <S.DocCardActions justify='flex-end'>
            <Tippy content='Создать'>
              <C.Control onClick={handleCreateDoc}>
                <CheckIcon />
              </C.Control>
            </Tippy>
          </S.DocCardActions>
        </S.DocCard>
      </S.OverlayContent>
    </div>
  )
}
