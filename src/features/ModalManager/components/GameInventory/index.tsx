import * as S from './styles'

import CloseIcon from 'assets/icons/close.svg'
import { closeModal } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import * as C from 'styles/components'

export const GameInventoryModal = () => {
  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <S.Modal>
      <S.ModalClose onClick={handleClose}>
        <CloseIcon />
      </S.ModalClose>
      <C.Title>{t('modals.gameInventory.title')}</C.Title>
      <C.Divider />

      <S.ModalContent>GameInventoryModal</S.ModalContent>
      <C.Divider decorated />

      <C.Divider />
    </S.Modal>
  )
}
