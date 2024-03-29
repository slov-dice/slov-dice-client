import { switchOptions } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Switch, T_SwitchOption } from 'components/Switch'
import { closeModal } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_Locale } from 'models/shared/app'
import { appActions } from 'store/app'
import * as C from 'styles/components'

export const TranslatorModal = () => {
  const language = useStoreSelector((store) => store.app.language)
  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  const handleSwitchLanguage = (option: T_SwitchOption) => {
    dispatch(appActions.switchLanguage(option.value as E_Locale))
  }

  return (
    <S.Modal>
      <S.ModalClose onClick={handleClose}>
        <CloseIcon />
      </S.ModalClose>
      <C.Title>{t('modals.translator.title')}</C.Title>
      <C.Divider />

      <S.ModalContent>
        {t('modals.translator.paragraph1')} <br /> {t('modals.translator.paragraph2')}
      </S.ModalContent>
      <C.Divider decorated />

      <Switch
        value={language}
        options={switchOptions}
        onChange={handleSwitchLanguage}
        name='language'
      />

      <C.Divider />
    </S.Modal>
  )
}
