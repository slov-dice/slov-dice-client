import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { useRestorePassword } from './useRestorePassword'

import { FormRestore } from '../../models/forms'
import { restoreSchema } from '../../utils/validations'

import { Button } from 'components/Button'
import { FormField } from 'components/InputFields'
import { t } from 'languages'
import * as C from 'styles/components'

export const ResetForm = () => {
  const { restorePassword } = useRestorePassword()

  const formRestore = useForm<FormRestore>({
    mode: 'onSubmit',
    resolver: yupResolver(restoreSchema),
  })

  const handleRestore: SubmitHandler<FormRestore> = async (values) => {
    restorePassword(values)
  }

  return (
    <FormProvider {...formRestore}>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onSubmit={formRestore.handleSubmit(handleRestore)}
      >
        <FormField name='email' placeholder={t('auth.form.email.label')} />
        <C.Divider />
        <Button type='submit'>{t('auth.form.actions.send')}</Button>
      </motion.form>
    </FormProvider>
  )
}
