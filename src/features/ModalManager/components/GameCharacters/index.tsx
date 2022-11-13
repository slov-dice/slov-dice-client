import { BarsTab, EffectsTab, SpecialsTab } from './extensions'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Tab, Tabs } from 'components/Tabs'
import { closeModal } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import * as C from 'styles/components'

export const GameCharactersModal = () => {
  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <S.Modal>
      <S.ModalClose onClick={handleClose}>
        <CloseIcon />
      </S.ModalClose>
      <C.Title>{t('modals.gameCharacters.title')}</C.Title>
      <S.ModalContent>
        <Tabs>
          {/* <Tab id='Права' tabTitle='Права'>
            <PermissionsTab />
          </Tab> */}
          <Tab id='Бары' tabTitle='Бары'>
            <BarsTab />
          </Tab>
          <Tab id='Характеристики' tabTitle='Характеристики'>
            <SpecialsTab />
          </Tab>
          <Tab id='Эффекты' tabTitle='Эффекты'>
            <EffectsTab />
          </Tab>
        </Tabs>
      </S.ModalContent>
    </S.Modal>
  )
}
