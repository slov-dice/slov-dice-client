import * as S from './styles'

import PlusIcon from 'assets/icons/app/plus.svg'

export const AddCharacterCard = () => {
  return (
    <S.Card>
      <div>Добавить персонажа</div>
      <S.CardIcon>
        <PlusIcon />
      </S.CardIcon>
    </S.Card>
  )
}
