import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import * as S from './styles'
import { useSignIn } from './useSignIn'

import { I_FormSignIn } from '../../models/form'

import { Button } from 'components/Buttons'
import { FormField } from 'components/InputFields'
import { LinkButton } from 'components/LinkButton'
import { E_Modals } from 'features/ModalManager/models'
import { openModal } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { E_AuthType } from 'models/app'
import * as C from 'styles/components'
import { LocalStorage } from 'utils/helpers/localStorage'
import { signInSchema } from 'utils/validations/auth'

export const LoginForm = () => {
  const dispatch = useStoreDispatch()

  const { fetchSignIn, signInProgress } = useSignIn(dispatch)

  const formSignIn = useForm<I_FormSignIn>({
    mode: 'onSubmit',
    resolver: yupResolver(signInSchema),
  })

  const handleSignIn: SubmitHandler<I_FormSignIn> = async (values) => {
    LocalStorage.setAuthType(E_AuthType.email)
    await fetchSignIn({ ...values })
  }

  const handleOpenModal = () => {
    dispatch(openModal(E_Modals.restorePassword))
  }

  return (
    <S.Wrapper>
      <FormProvider {...formSignIn}>
        <FormField name='email' placeholder={t('auth.form.email')} />
        <C.Divider h={16} />
        <FormField name='password' placeholder={t('auth.form.password')} />
        <C.Divider />
        <Button disabled={signInProgress.isLoading} onClick={formSignIn.handleSubmit(handleSignIn)}>
          {signInProgress.isLoading ? t('auth.loading') : t('auth.form.actions.login')}
        </Button>
        <C.Divider />
        <LinkButton onClick={handleOpenModal}>{t('auth.bottom.restore')}</LinkButton>
      </FormProvider>
    </S.Wrapper>
  )
}
