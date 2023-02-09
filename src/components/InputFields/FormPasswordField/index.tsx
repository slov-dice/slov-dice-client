import { useFormContext } from 'react-hook-form'

import * as S from './styles'
import { usePassword } from './usePassword'

import EyeSlashIcon from 'assets/icons/app/eye-slash.svg'
import EyeIcon from 'assets/icons/app/eye.svg'
import { t } from 'languages'

interface I_FormFieldProps {
  name: string
  placeholder?: string
  type?: 'text' | 'email'
  maxLength?: number
}

export const FormPasswordField = (props: I_FormFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = (errors[props.name]?.message as any) || ''

  const { handleMouseEnter, handleMouseLeave, hidePassword, passwordVisible, showPassword } =
    usePassword()

  return (
    <S.FormPasswordFieldWrapper>
      <S.Input
        {...props}
        {...register(props.name)}
        maxLength={props.maxLength || 48}
        autoComplete='off'
        type={passwordVisible ? 'text' : 'password'}
      />
      <S.IconWrapper
        passwordVisible={passwordVisible}
        onMouseDown={showPassword}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={showPassword}
        onTouchEnd={hidePassword}
      >
        <EyeIcon />
        <EyeSlashIcon />
      </S.IconWrapper>
      <S.Error>{t(error)}</S.Error>
    </S.FormPasswordFieldWrapper>
  )
}
