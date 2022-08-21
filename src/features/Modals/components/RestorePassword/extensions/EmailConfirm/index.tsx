import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import * as S from './styles'

import { I_FormRestore, I_FormCode } from '../../models/form'
import { emitRestoreCheckCode, emitRestoreCheckEmail, setCooldown } from '../../slice'

import { Button } from 'components/Buttons'
import { FormField } from 'components/InputFields'
import { closeModal } from 'features/Modals/slice'
import { useCooldown } from 'hooks/useCooldown'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'
import { restoreSchema, codeSchema } from 'utils/validations/auth'

export const EmailConfirm = () => {
  const dispatch = useStoreDispatch()
  const { isLoading: isCheckEmailLoading, isCooldown: isCheckEmailCooldown } = useStoreSelector(
    (state) => state.restore.statuses.checkEmail,
  )

  const isCheckCodeLoading = useStoreSelector((state) => state.restore.statuses.checkCode.isLoading)

  const { cooldown, isCooldown } = useCooldown(isCheckEmailCooldown)

  useEffect(() => {
    if (!isCooldown) {
      dispatch(setCooldown(false))
    }
  }, [dispatch, isCooldown])

  const formRestore = useForm<I_FormRestore>({
    mode: 'onSubmit',
    resolver: yupResolver(restoreSchema),
  })

  const formCode = useForm<I_FormCode>({
    mode: 'onSubmit',
    resolver: yupResolver(codeSchema),
  })

  const handleCheckEmail: SubmitHandler<I_FormRestore> = (values) => {
    dispatch(emitRestoreCheckEmail({ email: values.email }))
  }

  const handleNext: SubmitHandler<I_FormCode> = (values) => {
    dispatch(emitRestoreCheckCode({ code: values.code }))
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  return (
    <S.Wrapper>
      <div>
        <S.Paragraph>
          <span>1. </span>
          {t('modals.restorePassword.paragraph1')}
        </S.Paragraph>
        <C.Divider h={16} />
        <FormProvider {...formRestore}>
          <S.WrapperEmailField>
            <FormField name='email' placeholder={t('modals.restorePassword.form.email')} />
            <Button
              disabled={isCheckEmailLoading || isCooldown}
              onClick={formRestore.handleSubmit(handleCheckEmail)}
              mod={Button.mod.secondary}
            >
              {isCheckEmailLoading
                ? t('auth.loading')
                : isCooldown
                ? cooldown
                : t('modals.restorePassword.actions.send')}
            </Button>
          </S.WrapperEmailField>
        </FormProvider>
        <C.Divider decorated />
        <S.Paragraph>
          <span>2. </span>
          {t('modals.restorePassword.paragraph2')}
        </S.Paragraph>
        <C.Divider h={16} />
        <FormProvider {...formCode}>
          <S.WrapperCodeField>
            <FormField
              name='code'
              maxLength={4}
              placeholder={t('modals.restorePassword.form.code')}
            />
          </S.WrapperCodeField>
        </FormProvider>
        <C.Divider />
      </div>
      <S.WrapperActions>
        <Button onClick={handleCloseModal} mod={Button.mod.secondary}>
          {t('modals.restorePassword.actions.cancel')}
        </Button>
        <Button disabled={isCheckCodeLoading} onClick={formCode.handleSubmit(handleNext)}>
          {isCheckCodeLoading ? t('auth.loading') : t('modals.restorePassword.actions.next')}
        </Button>
      </S.WrapperActions>
    </S.Wrapper>
  )
}
