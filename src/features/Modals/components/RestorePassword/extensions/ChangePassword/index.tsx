import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import * as S from './styles'

import { I_FormChangePassword } from '../../models/form'
import { emitRestoreChangePassword } from '../../slice'

import { Button } from 'components/Button'
import { FormField } from 'components/InputFields'
import { closeModal } from 'features/Modals/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import * as C from 'styles/components'
import { changePasswordSchema } from 'utils/validations/auth'

export const ChangePassword = () => {
  const dispatch = useStoreDispatch()

  const formChangePassword = useForm<I_FormChangePassword>({
    mode: 'onSubmit',
    resolver: yupResolver(changePasswordSchema),
  })

  const handleChangePassword: SubmitHandler<I_FormChangePassword> = (values) => {
    dispatch(emitRestoreChangePassword({ password: values.password }))
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  return (
    <S.Wrapper>
      <div>
        <S.Paragraph>
          <span>3. </span>
          {t('modals.restorePassword.paragraph3')}
        </S.Paragraph>
        <C.Divider h={16} />
        <FormProvider {...formChangePassword}>
          <FormField name='password' placeholder={t('modals.restorePassword.form.password')} />
          <C.Divider h={16} />
          <FormField name='rePassword' placeholder={t('modals.restorePassword.form.rePassword')} />
        </FormProvider>
        <C.Divider />
      </div>
      <S.WrapperActions>
        <Button onClick={handleCloseModal} variants={Button.variants.secondary}>
          {t('modals.restorePassword.actions.cancel')}
        </Button>
        <Button onClick={formChangePassword.handleSubmit(handleChangePassword)}>
          {t('modals.restorePassword.actions.set')}
        </Button>
      </S.WrapperActions>
    </S.Wrapper>
  )
}
