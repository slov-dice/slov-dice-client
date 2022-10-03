import * as S from './styles'

import { AddCharacterCard, CharacterCard } from 'components/Character'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const CharactersContent = () => {
  const characters = useStoreSelector((state) => state.gameCharacters.characters)

  return (
    <S.Wrapper>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
      <AddCharacterCard />
    </S.Wrapper>
  )
}
