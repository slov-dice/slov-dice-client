import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Button } from 'components/Buttons'
import { modalManagerActions } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { T_GameSave } from 'models/shared/game/save'
import { roomActions } from 'store/room'
import * as C from 'styles/components'

export const LoadGameModal = () => {
  const dispatch = useStoreDispatch()

  const [file, setFile] = useState<T_GameSave | null>(null)

  const handleClose = () => {
    dispatch(modalManagerActions.closeModal())
  }

  const isGameSave = (file: any): boolean =>
    Boolean(
      file?.game?.battlefield?.window &&
        file?.game?.characters?.window &&
        file?.game?.characters?.settings &&
        file?.game?.textEditor?.window &&
        file?.messages,
    )

  const handleUploadJSON = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader()
    setFile(null)
    if (e.target.files?.[0]) {
      fileReader.readAsText(e.target.files[0], 'UTF-8')
      fileReader.onload = (e) => {
        if (e.target) {
          const result = JSON.parse(e.target.result as string)
          if (isGameSave(result)) {
            setFile(result)
            toast.success(t('notification.fileVerifiedSuccess'))
          } else {
            toast.error(t('notification.fileVerifiedError'))
          }
        }
      }
    }
  }

  const handleLoadGame = () => {
    if (file) {
      dispatch(roomActions.emitLoadGame({ save: file }))
    }
  }

  return (
    <S.Modal>
      <S.ModalClose onClick={handleClose}>
        <CloseIcon />
      </S.ModalClose>
      <C.Title>{t('modals.loadGame.title')}</C.Title>
      <C.Divider />

      <S.ModalContent>
        <p>{t('modals.loadGame.description')}</p>
      </S.ModalContent>
      <C.Divider decorated />
      <input type='file' onChange={handleUploadJSON} accept='application/JSON' />
      <C.Divider />
      <Button onClick={handleLoadGame} disabled={!file}>
        {t('modals.loadGame.actions.upload')}
      </Button>
    </S.Modal>
  )
}
