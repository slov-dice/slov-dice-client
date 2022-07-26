import * as S from './styles'

interface I_ControlProps {
  onClick: () => void
}

export const Control = ({ onClick }: I_ControlProps) => (
  <S.Control onClick={onClick}>
    <svg width='24' height='24' viewBox='0 0 24 24'>
      <S.Path
        variants={{
          closed: { d: 'M 2 4 L 19 4' },
          opened: { d: 'M 3 3 L 20 20' },
        }}
      />
      <S.Path
        d='M 2 12 L 21 12'
        variants={{
          closed: { opacity: 1 },
          opened: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <S.Path
        variants={{
          closed: { d: 'M 2 20 L 18 20' },
          opened: { d: 'M 3 20 L 20 3' },
        }}
      />
    </svg>
  </S.Control>
)
