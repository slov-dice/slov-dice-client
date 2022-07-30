import * as S from './styles'

interface I_FormFieldProps {
  name: string
  placeholder?: string
  type?: 'text' | 'email'
}

export const FormField = (props: I_FormFieldProps) => {
  return (
    <S.FormField>
      <S.Input {...props} autoComplete='off' />
      <S.Error>ERROR</S.Error>
    </S.FormField>
  )
}
