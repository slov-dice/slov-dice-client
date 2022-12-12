import * as S from './styles'

import EditIcon from 'assets/icons/app/edit.svg'
import { BattlefieldCard } from 'components/Battlefield'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const BattlefieldContent = () => {
  const { characters } = useStoreSelector((store) => ({
    characters: store.room.game.characters.window.characters,
  }))

  return (
    <S.WindowContentWrapper>
      <S.FieldWrapper>
        <S.MasterFieldEdit>
          <EditIcon />
        </S.MasterFieldEdit>
        <S.CardsWrapper>
          <BattlefieldCard name='Enemy 1' avatar='' />
          <BattlefieldCard name='Enemy 2' avatar='' />
        </S.CardsWrapper>
      </S.FieldWrapper>
      <S.FieldWrapper>
        <S.PlayerFieldEdit>
          <EditIcon />
        </S.PlayerFieldEdit>
        <S.CardsWrapper>
          {characters.map((character) => (
            <BattlefieldCard key={character.id} name={character.name} avatar={character.avatar} />
          ))}
        </S.CardsWrapper>
      </S.FieldWrapper>
    </S.WindowContentWrapper>
  )
}
