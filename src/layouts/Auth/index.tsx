import * as S from './styles'

import { AuthForm } from 'features/AuthForm'
import { HeroBackground } from 'features/HeroBackground'

export const AuthLayout = () => {
  return (
    <S.Wrapper>
      <AuthForm />
      <HeroBackground />
    </S.Wrapper>
  )
}
