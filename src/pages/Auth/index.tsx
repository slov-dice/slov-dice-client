import * as S from './styles'

import { Button } from 'components/Button'
import { FormField } from 'components/InputFields'
import { HeroBackground } from 'features/HeroBackground'

export const Auth = () => {
  return (
    <S.AuthWrapper>
      <S.AuthForm>
        <S.FormWrapper>
          <FormField name='Email' placeholder='Email' />
          <FormField name='Password' placeholder='Password' />
          <Button>123</Button>
        </S.FormWrapper>
      </S.AuthForm>
      <HeroBackground />
    </S.AuthWrapper>
  )
}
