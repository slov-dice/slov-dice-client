import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { useSignIn } from './useSignIn'

import { E_AuthContent } from '../../models'
import { FormSignIn } from '../../models/forms'
import { switchAuthFormContent } from '../../slice'
import { signInSchema } from '../../utils/validations'

import { Button } from 'components/Button'
import { FormField } from 'components/InputFields'
import { LinkButton } from 'components/LinkButton'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { E_AuthType } from 'models/app'
import * as C from 'styles/components'
import { LocalStorage } from 'utils/helpers/localStorage'

export const LoginForm = () => {
  const dispatch = useStoreDispatch()

  const { signIn, signInProgress } = useSignIn(dispatch)

  const formSignIn = useForm<FormSignIn>({
    mode: 'onSubmit',
    resolver: yupResolver(signInSchema),
  })

  const handleSignIn: SubmitHandler<FormSignIn> = async (values) => {
    LocalStorage.setAuthType(E_AuthType.email)
    await signIn({ ...values })
  }

  const handleReplace = () => {
    dispatch(switchAuthFormContent(E_AuthContent.forgotPassword))
  }

  return (
    <FormProvider {...formSignIn}>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onSubmit={formSignIn.handleSubmit(handleSignIn)}
      >
        <FormField name='email' placeholder={t('auth.form.email.label')} />
        <C.Divider h={16} />
        <FormField name='password' placeholder={t('auth.form.password.label')} />
        <C.Divider />
        <Button type='submit'>
          {signInProgress.isLoading ? t('auth.form.actions.loading') : t('auth.form.actions.login')}
        </Button>
        <C.Divider />
        <LinkButton onClick={handleReplace}>{t('auth.bottom.restore')}</LinkButton>
      </motion.form>
    </FormProvider>
  )
}
