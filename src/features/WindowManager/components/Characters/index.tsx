import * as S from './styles'

import { AddCharacterCard, CharacterCard } from 'components/Character'
import { WindowOverlayManager } from 'features/WindowOverlayManager'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const CharactersContent = () => {
  const { characters, overlays } = useStoreSelector((state) => state.gameCharacters)

  const { openCharacterWindowOverlay } = useActions()

  const handleOpenCreateCharacterOverlay = () => {
    openCharacterWindowOverlay(E_WindowOverlay.createCharacter)
  }

  return (
    <>
      <WindowOverlayManager overlays={overlays} />
      <S.Wrapper>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
        <AddCharacterCard onClick={handleOpenCreateCharacterOverlay} />
      </S.Wrapper>
    </>
  )
}
