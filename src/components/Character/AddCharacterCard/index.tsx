import * as S from './styles'

import PlusIcon from 'assets/icons/app/plus.svg'

interface I_AddCharacterCardProps {
  onClick: () => void
}

export const AddCharacterCard = ({ onClick }: I_AddCharacterCardProps) => {
  return (
    <S.Card onClick={onClick}>
      <div>Добавить персонажа</div>
      <S.CardIcon>
        <PlusIcon />
      </S.CardIcon>
    </S.Card>
  )
}
