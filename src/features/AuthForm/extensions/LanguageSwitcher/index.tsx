import { AnimatePresence } from 'framer-motion'

import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Locale } from 'models/shared/app'
import { appActions } from 'store/app'

export const LanguageSwitcher = () => {
  const language = useStoreSelector((store) => store.app.language)
  const dispatch = useStoreDispatch()

  const handleSwitchLanguage = () => {
    const selectedLanguage = language === E_Locale.ru ? E_Locale.en : E_Locale.ru
    dispatch(appActions.switchLanguage(selectedLanguage))
  }

  return (
    <AnimatePresence mode='wait' initial={false}>
      <S.Wrapper onClick={handleSwitchLanguage}>
        <S.Label key={language}>{language}</S.Label>
      </S.Wrapper>
    </AnimatePresence>
  )
}
