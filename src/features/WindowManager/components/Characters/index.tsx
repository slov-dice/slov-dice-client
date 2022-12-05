import { useCallback } from 'react'

import * as S from './styles'

import { AddCharacterCard, CharacterCard } from 'components/Character'
import { WindowOverlayManager } from 'features/WindowOverlayManager'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { useEventListener } from 'hooks/useEventListener'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const CharactersContent = () => {
  const { characters, settingsBars, settingsSpecials, overlays } = useStoreSelector((store) => ({
    characters: store.room.game.characters.window.characters,
    settingsBars: store.room.game.characters.settings.bars,
    settingsSpecials: store.room.game.characters.settings.specials,
    overlays: store.gameCharacters.overlays,
  }))

  const { openCharacterWindowOverlay, closeLastCharacterWindowOverlay, setCharacterCreator } =
    useActions()

  const handleOpenCreateCharacterOverlay = () => {
    setCharacterCreator({ settingsBars, settingsSpecials })
    openCharacterWindowOverlay({ name: E_WindowOverlay.createCharacter, isOpen: true })
  }

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLastCharacterWindowOverlay()
      }
    },
    [closeLastCharacterWindowOverlay],
  )
  useEventListener('keydown', handleEsc)

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
