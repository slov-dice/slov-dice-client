import { useFormContext } from 'react-hook-form'

import * as S from './styles'

import { t } from 'languages'

interface I_FormFieldProps {
  name: string
  placeholder?: string
  type?: 'text' | 'email'
}

export const FormField = (props: I_FormFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = (errors[props.name]?.message as any) || ''

  return (
    <S.FormField>
      <S.Input {...props} {...register(props.name)} autoComplete='off' />
      <S.Error>{t(error)}</S.Error>
    </S.FormField>
  )
}
