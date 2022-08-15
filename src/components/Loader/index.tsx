import * as S from './styles'

export enum E_LoaderVariant {
  loading = 'loading',
  success = 'success',
  error = 'error',
}

interface I_LoaderProps {
  variant: E_LoaderVariant
}

export const Loader = ({ variant }: I_LoaderProps) => {
  return (
    <S.Loader animate={variant}>
      <S.Dot />
    </S.Loader>
  )
}
