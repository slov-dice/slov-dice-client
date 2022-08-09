import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { useSignIn } from './useSignIn'

import { I_FormSignIn } from '../../models/form'

import { Button } from 'components/Button'
import { FormField } from 'components/InputFields'
import { LinkButton } from 'components/LinkButton'
import { E_Modals } from 'features/Modals/models'
import { openModal } from 'features/Modals/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { E_AuthType } from 'models/app'
import * as C from 'styles/components'
import { LocalStorage } from 'utils/helpers/localStorage'
import { signInSchema } from 'utils/validations/auth'

export const LoginForm = () => {
  const dispatch = useStoreDispatch()

  const { signIn, signInProgress } = useSignIn(dispatch)

  const formSignIn = useForm<I_FormSignIn>({
    mode: 'onSubmit',
    resolver: yupResolver(signInSchema),
  })

  const handleSignIn: SubmitHandler<I_FormSignIn> = async (values) => {
    LocalStorage.setAuthType(E_AuthType.email)
    await signIn({ ...values })
  }

  const handleOpenModal = () => {
    dispatch(openModal(E_Modals.restorePassword))
  }

  return (
    <>
      <FormProvider {...formSignIn}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormField name='email' placeholder={t('auth.form.email.label')} />
          <C.Divider h={16} />
          <FormField name='password' placeholder={t('auth.form.password.label')} />
          <C.Divider />
          <Button onClick={formSignIn.handleSubmit(handleSignIn)}>
            {signInProgress.isLoading
              ? t('auth.form.actions.loading')
              : t('auth.form.actions.login')}
          </Button>
          <C.Divider />
          <LinkButton onClick={handleOpenModal}>{t('auth.bottom.restore')}</LinkButton>
        </motion.div>
      </FormProvider>
    </>
  )
}
