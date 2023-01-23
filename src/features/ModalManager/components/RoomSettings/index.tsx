import { BarsTab, RoomStateTab } from './extensions'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Tab, Tabs } from 'components/Tabs'
import { closeModal } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import * as C from 'styles/components'

export const RoomSettingsModal = () => {
  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <S.Modal>
      <S.ModalClose onClick={handleClose}>
        <CloseIcon />
      </S.ModalClose>
      <C.Title>{t('modals.roomSettings.title')}</C.Title>
      <C.Divider />

      <S.ModalContent>
        <Tabs>
          <Tab id='bars' tabTitle='modals.roomSettings.tabs.bars.title'>
            <BarsTab />
          </Tab>
          <Tab id='roomState' tabTitle='modals.roomSettings.tabs.roomState.title'>
            <RoomStateTab />
          </Tab>
        </Tabs>
      </S.ModalContent>
    </S.Modal>
  )
}
