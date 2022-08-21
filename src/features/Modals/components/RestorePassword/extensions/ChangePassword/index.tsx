import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import * as S from './styles'

import { I_FormChangePassword } from '../../models/form'
import { emitRestoreChangePassword } from '../../slice'

import { Button } from 'components/Buttons'
import { FormField } from 'components/InputFields'
import { closeModal } from 'features/Modals/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'
import { changePasswordSchema } from 'utils/validations/auth'

export const ChangePassword = () => {
  const dispatch = useStoreDispatch()
  const isChangePasswordLoading = useStoreSelector(
    (state) => state.restore.statuses.changePassword.isLoading,
  )

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
        <Button onClick={handleCloseModal} mod={Button.mod.secondary}>
          {t('modals.restorePassword.actions.cancel')}
        </Button>
        <Button
          disabled={isChangePasswordLoading}
          onClick={formChangePassword.handleSubmit(handleChangePassword)}
        >
          {isChangePasswordLoading ? t('auth.loading') : t('modals.restorePassword.actions.set')}
        </Button>
      </S.WrapperActions>
    </S.Wrapper>
  )
}
