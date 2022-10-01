import { characters } from './data'
import * as S from './styles'

import { CharacterCard } from 'components/CharacterCard'

export const CharactersContent = () => {
  return (
    <S.Wrapper>
      {characters.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
    </S.Wrapper>
  )
}
