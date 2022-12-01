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
          <Tab id='bars' tabTitle='modals.gameCharacters.tabs.bars.title'>
            <BarsTab />
          </Tab>
          <Tab id='specials' tabTitle='modals.gameCharacters.tabs.specials.title'>
            <SpecialsTab />
          </Tab>
          <Tab id='effects' tabTitle='modals.gameCharacters.tabs.effects.title'>
            <EffectsTab />
          </Tab>
        </Tabs>
      </S.ModalContent>
    </S.Modal>
  )
}
