import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { closeModal } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import * as C from 'styles/components'

export const ChangelogModal = () => {
  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <S.Modal>
      <S.ModalClose onClick={handleClose}>
        <CloseIcon />
      </S.ModalClose>
      <C.Title>{t('modals.changelog.title')}</C.Title>
      <C.Divider />

      <S.ModalContent>
        <C.Divider decorated />
        <S.VersionWrapper>
          <p>v0.4.0</p>
          <S.ChangeList>
            <li>{t('modals.changelog.040.listItem1')}</li>
            <li>{t('modals.changelog.040.listItem2')}</li>
            <li>{t('modals.changelog.040.listItem3')}</li>
            <li>{t('modals.changelog.040.listItem4')}</li>
            <li>{t('modals.changelog.040.listItem5')}</li>
            <li>{t('modals.changelog.040.listItem6')}</li>
          </S.ChangeList>
        </S.VersionWrapper>
        <C.Divider />
        <S.VersionWrapper>
          <p>v0.3.5</p>
          <S.ChangeList>
            <li>{t('modals.changelog.035.listItem1')}</li>
            <li>{t('modals.changelog.035.listItem2')}</li>
            <li>{t('modals.changelog.035.listItem3')}</li>
            <li>{t('modals.changelog.035.listItem4')}</li>
            <li>{t('modals.changelog.035.listItem5')}</li>
          </S.ChangeList>
        </S.VersionWrapper>
        <C.Divider />
      </S.ModalContent>
    </S.Modal>
  )
}
