import { switchOptions } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/close.svg'
import { Switch, T_SwitchOption } from 'components/Switch'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_Locale } from 'models/app'
import { closeModal, switchLanguage } from 'store/ui'
import * as C from 'styles/components'

export const TranslatorModal = () => {
  const language = useStoreSelector((state) => state.ui.language)
  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeModal(null))
  }

  const handleSwitchLanguage = (option: T_SwitchOption) => {
    dispatch(switchLanguage(option.value as E_Locale))
  }

  return (
    <S.Window>
      <S.WindowClose onClick={handleClose}>
        <CloseIcon />
      </S.WindowClose>
      <S.WindowTitle>{t('modals.translator.title')}</S.WindowTitle>
      <C.Divider />

      <S.WindowContent>
        {t('modals.translator.paragraph1')} <br /> {t('modals.translator.paragraph2')}
      </S.WindowContent>
      <C.Divider decorated />

      <Switch
        value={language}
        options={switchOptions}
        onChange={(option) => handleSwitchLanguage(option)}
      />

      <C.Divider />
    </S.Window>
  )
}
