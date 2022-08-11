import { yupResolver } from '@hookform/resolvers/yup'
import { Dispatch, SetStateAction } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import * as S from './styles'

import { E_ModalContent } from '../..'

import { Button } from 'components/Button'
import { FormField } from 'components/InputFields'
import { I_FormRestore, I_FormCode } from 'features/Modals/models/form'
import { closeModal } from 'features/Modals/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { emitRestoreCheckEmail } from 'store/auth'
import * as C from 'styles/components'
import { restoreSchema, codeSchema } from 'utils/validations/auth'

interface I_EmailConfirmProps {
  setModalContent: Dispatch<SetStateAction<E_ModalContent>>
}

export const EmailConfirm = ({ setModalContent }: I_EmailConfirmProps) => {
  const dispatch = useStoreDispatch()

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
    console.log(values)
    setModalContent(E_ModalContent.changePassword)
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
              onClick={formRestore.handleSubmit(handleCheckEmail)}
              type='submit'
              variants={Button.variants.secondary}
            >
              {t('modals.restorePassword.actions.send')}
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
        <Button onClick={handleCloseModal} variants={Button.variants.secondary}>
          {t('modals.restorePassword.actions.cancel')}
        </Button>
        <Button onClick={formCode.handleSubmit(handleNext)}>
          {t('modals.restorePassword.actions.next')}
        </Button>
      </S.WrapperActions>
    </S.Wrapper>
  )
}
