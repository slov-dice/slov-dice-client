import { motion, AnimatePresence } from 'framer-motion'

import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Locale } from 'models/app'
import { switchLanguage } from 'store/ui'

export const LanguageSwitcher = () => {
  const { language } = useStoreSelector((state) => state.ui)
  const dispatch = useStoreDispatch()

  const handleSwitchLanguage = () => {
    const selectedLanguage = language === E_Locale.ru ? E_Locale.en : E_Locale.ru
    dispatch(switchLanguage(selectedLanguage))
  }

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <S.LanguageSwitcher
        onClick={handleSwitchLanguage}
        whileHover={{ opacity: 0.75 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span key={language} initial={{ y: 28 }} animate={{ y: 0 }} exit={{ y: 28 }}>
          {language}
        </motion.span>
      </S.LanguageSwitcher>
    </AnimatePresence>
  )
}
