import { useLayoutEffect } from 'react'

import * as S from './styles'

import { AuthForm } from 'features/AuthForm'
import { HeroBackground } from 'features/HeroBackground'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { openAuthLayout, closeAuthLayout } from 'store/ui'

export const AuthLayout = () => {
  const dispatch = useStoreDispatch()
  useLayoutEffect(() => {
    dispatch(openAuthLayout())

    return () => {
      dispatch(closeAuthLayout())
    }
  }, [dispatch])
  return (
    <S.AuthWrapper>
      <AuthForm />
      <HeroBackground />
    </S.AuthWrapper>
  )
}
