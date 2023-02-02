import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Button } from 'components/Buttons'
import { modalManagerActions } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { T_GameSave } from 'models/shared/game/save'
import * as C from 'styles/components'

export const SaveGameModal = () => {
  const dispatch = useStoreDispatch()
  const { game, messages, name } = useStoreSelector((store) => ({
    game: store.room.game,
    messages: store.room.messages,
    name: store.room.name,
  }))

  const handleClose = () => {
    dispatch(modalManagerActions.closeModal())
  }

  const handleDownloadGame = () => {
    const gameSave: T_GameSave = { game, messages }
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(gameSave, null, 2),
    )}`
    const link = document.createElement('a')
    link.href = jsonString
    const dateCreating = new Date()
    const fullDate = [
      [dateCreating.getFullYear(), dateCreating.getMonth() + 1, dateCreating.getUTCDate()],
      [dateCreating.getHours(), dateCreating.getMinutes(), dateCreating.getSeconds()],
    ]
    link.download = `${name}-${fullDate[0].join('.')}-${fullDate[1].join('.')}.json`

    link.click()
  }

  return (
    <S.Modal>
      <S.ModalClose onClick={handleClose}>
        <CloseIcon />
      </S.ModalClose>
      <C.Title>{t('modals.saveGame.title')}</C.Title>
      <C.Divider />

      <S.ModalContent>
        <p>{t('modals.saveGame.description')}</p>
      </S.ModalContent>
      <C.Divider decorated />
      <Button onClick={handleDownloadGame}>{t('modals.saveGame.actions.download')}</Button>
      <C.Divider />
    </S.Modal>
  )
}
