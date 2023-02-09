import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import * as S from './styles'
import { useSignUp } from './useSignUp'

import { I_FormSignUp } from '../../models/form'

import { Button } from 'components/Buttons'
import { FormField, FormPasswordField } from 'components/InputFields'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_AuthType } from 'models/shared/app'
import * as C from 'styles/components'
import { LocalStorage } from 'utils/helpers/localStorage'
import { signUpSchema } from 'utils/validations/auth'

export const RegistrationForm = () => {
  const dispatch = useStoreDispatch()
  const language = useStoreSelector((store) => store.app.language)

  const { fetchSignUp, signUpProgress } = useSignUp(dispatch)

  const formSignUp = useForm<I_FormSignUp>({
    mode: 'onSubmit',
    resolver: yupResolver(signUpSchema),
  })

  const handleSignUp: SubmitHandler<I_FormSignUp> = async (values) => {
    LocalStorage.setAuthType(E_AuthType.email)
    const { rePassword, ...rest } = values
    await fetchSignUp({ ...rest, language })
  }

  return (
    <S.Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <FormProvider {...formSignUp}>
        <FormField name='email' placeholder={t('auth.form.email')} />
        <C.Divider h={16} />
        <FormField name='nickname' placeholder={t('auth.form.nickname')} />
        <C.Divider h={16} />
        <FormPasswordField name='password' placeholder={t('auth.form.password')} />
        <C.Divider h={16} />
        <FormPasswordField name='rePassword' placeholder={t('auth.form.rePassword')} />
        <C.Divider />
        <Button disabled={signUpProgress.isLoading} onClick={formSignUp.handleSubmit(handleSignUp)}>
          {signUpProgress.isLoading ? t('auth.loading') : t('auth.form.actions.registration')}
        </Button>
      </FormProvider>
    </S.Wrapper>
  )
}
