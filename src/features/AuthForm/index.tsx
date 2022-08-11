import { AnimatePresence } from 'framer-motion'
import { useLayoutEffect } from 'react'

import { AuthTitle, AuthArrow, AuthContent, AuthBottom } from './components'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { E_AuthContent } from './models'
import { closeAuthForm, openAuthForm, switchAuthFormContent } from './slice'
import * as S from './styles'

import BackIcon from 'assets/icons/arrow-left.svg'
import { BackButton } from 'components/BackButton'
import { LinkButton } from 'components/LinkButton'
import { Logo } from 'components/Logo'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'

export const AuthForm = () => {
  const dispatch = useStoreDispatch()
  const authFormContent = useStoreSelector((state) => state.authForm.content)

  useLayoutEffect(() => {
    dispatch(openAuthForm())

    return () => {
      dispatch(closeAuthForm())
    }
  }, [dispatch])

  const handleBackButton = () => {
    if (AuthArrow[authFormContent] === false) return
    dispatch(switchAuthFormContent(AuthArrow[authFormContent] as E_AuthContent))
  }

  const handleBottomReplace = () => {
    dispatch(switchAuthFormContent(AuthBottom[authFormContent].action))
  }

  const Content = AuthContent[authFormContent]

  return (
    <S.Box>
      <S.Content>
        <div>
          <div>
            <AnimatePresence exitBeforeEnter>
              {AuthArrow[authFormContent] && (
                <BackButton onClick={handleBackButton}>
                  <BackIcon />
                </BackButton>
              )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
              <S.Title
                key={AuthTitle[authFormContent]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                {t(AuthTitle[authFormContent])}
              </S.Title>
            </AnimatePresence>
          </div>
          <Content />
        </div>
        <S.ContentBottom>
          <S.BottomAction>
            {t(AuthBottom[authFormContent].description)}
            &nbsp;
            <LinkButton onClick={handleBottomReplace}>
              {t(AuthBottom[authFormContent].button)}
            </LinkButton>
          </S.BottomAction>
          <LanguageSwitcher />
        </S.ContentBottom>
      </S.Content>
      <S.BottomDecoration>
        <Logo relative />
      </S.BottomDecoration>
    </S.Box>
  )
}
