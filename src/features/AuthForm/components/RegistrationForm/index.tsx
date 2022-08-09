import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { useSignUp } from './useSignUp'

import { I_FormSignUp } from '../../models/form'

import { Button } from 'components/Button'
import { FormField } from 'components/InputFields'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { E_AuthType } from 'models/app'
import * as C from 'styles/components'
import { LocalStorage } from 'utils/helpers/localStorage'
import { signUpSchema } from 'utils/validations/auth'

export const RegistrationForm = () => {
  const dispatch = useStoreDispatch()

  const { fetchSignUp, signUpProgress } = useSignUp(dispatch)

  const formSignUp = useForm<I_FormSignUp>({
    mode: 'onSubmit',
    resolver: yupResolver(signUpSchema),
  })

  const handleSignUp: SubmitHandler<I_FormSignUp> = async (values) => {
    LocalStorage.setAuthType(E_AuthType.email)
    const { rePassword, ...rest } = values
    await fetchSignUp({ ...rest })
  }

  return (
    <FormProvider {...formSignUp}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <FormField name='email' placeholder={t('auth.form.email.label')} />
        <C.Divider h={16} />
        <FormField name='nickname' placeholder={t('auth.form.nickname.label')} />
        <C.Divider h={16} />
        <FormField name='password' placeholder={t('auth.form.password.label')} />
        <C.Divider h={16} />
        <FormField name='rePassword' placeholder={t('auth.form.rePassword.label')} />
        <C.Divider />
        <Button onClick={formSignUp.handleSubmit(handleSignUp)}>
          {signUpProgress.isLoading
            ? t('auth.form.actions.loading')
            : t('auth.form.actions.registration')}
        </Button>
      </motion.div>
    </FormProvider>
  )
}
