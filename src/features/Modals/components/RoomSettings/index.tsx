import * as S from './styles'

import CloseIcon from 'assets/icons/close.svg'
import { closeModal } from 'features/Modals/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'

export const RoomSettingsModal = () => {
  const dispatch = useStoreDispatch()
  const room = useStoreSelector((store) => store.room)

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <S.Window>
      <S.WindowClose onClick={handleClose}>
        <CloseIcon />
      </S.WindowClose>
      <C.Title>{t('modals.roomSettings.title')}</C.Title>
      <C.Divider />

      <S.WindowContent>
        <pre>{JSON.stringify(room, null, 2)}</pre>
      </S.WindowContent>
      <C.Divider decorated />

      <C.Divider />
    </S.Window>
  )
}
