import { yupResolver } from '@hookform/resolvers/yup'
import { AnimatePresence } from 'framer-motion'
import { SetStateAction, Dispatch } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import * as S from './styles'

import { E_ModalContent } from '../..'

import BackIcon from 'assets/icons/arrow-left.svg'
import { BackButton } from 'components/BackButton'
import { Button } from 'components/Button'
import { FormField } from 'components/InputFields'
import { I_FormChangePassword } from 'features/Modals/models/form'
import { closeModal } from 'features/Modals/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import * as C from 'styles/components'
import { changePasswordSchema } from 'utils/validations/auth'

interface I_ChangePasswordProps {
  setModalContent: Dispatch<SetStateAction<E_ModalContent>>
}

export const ChangePassword = ({ setModalContent }: I_ChangePasswordProps) => {
  const dispatch = useStoreDispatch()

  const formChangePassword = useForm<I_FormChangePassword>({
    mode: 'onSubmit',
    resolver: yupResolver(changePasswordSchema),
  })

  const handleChangePassword: SubmitHandler<I_FormChangePassword> = (values) => {
    console.log(values)
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const handleBackButton = () => {
    setModalContent(E_ModalContent.emailConfirm)
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}
    >
      <div>
        <AnimatePresence exitBeforeEnter>
          <BackButton onClick={handleBackButton}>
            <BackIcon />
          </BackButton>
        </AnimatePresence>
        <S.Paragraph>{t('modals.restorePassword.paragraph3')}</S.Paragraph>
        <C.Divider h={16} />
        <FormProvider {...formChangePassword}>
          <FormField name='password' placeholder='Новый пароль' />
          <C.Divider h={16} />
          <FormField name='rePassword' placeholder='Повторите пароль' />
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
    </div>
  )
}
