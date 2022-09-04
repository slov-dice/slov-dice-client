import * as S from './styles'

import CloseIcon from 'assets/icons/close.svg'
import { closeModal } from 'features/Modals/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import * as C from 'styles/components'

export const JoinRoomModal = () => {
  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <S.Window>
      <S.WindowClose onClick={handleClose}>
        <CloseIcon />
      </S.WindowClose>
      <C.Title>{t('modals.joinRoom.title')}</C.Title>
      <C.Divider />

      <S.WindowContent>test</S.WindowContent>
      <C.Divider decorated />

      <C.Divider />
    </S.Window>
  )
}
