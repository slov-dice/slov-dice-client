import { useCallback } from 'react'

import { gameCharactersActions } from './slice'
import * as S from './styles'

import PlusIcon from 'assets/icons/app/plus.svg'
import { CharacterCard } from 'components/Character'
import { AddCard } from 'components/game'
import { E_Window } from 'features/WindowManager/models'
import { WindowOverlayManager } from 'features/WindowOverlayManager'
import { WindowOverlayManagerProvider } from 'features/WindowOverlayManager/context'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useEventListener } from 'hooks/useEventListener'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'

export const CharactersContent = () => {
  const { characters, settingsBars, settingsSpecials, overlays } = useStoreSelector((store) => ({
    characters: store.room.game.characters.window.characters,
    settingsBars: store.room.game.characters.settings.bars,
    settingsSpecials: store.room.game.characters.settings.specials,
    overlays: store.gameCharacters.overlays,
  }))

  const dispatch = useStoreDispatch()

  const handleOpenCreateCharacterOverlay = () => {
    dispatch(gameCharactersActions.setCharacterCreator({ settingsBars, settingsSpecials }))
    dispatch(
      dispatch(
        gameCharactersActions.openWindowOverlay({
          name: E_WindowOverlay.createCharacter,
        }),
      ),
    )
  }

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch(gameCharactersActions.closeLastWindowOverlay())
      }
    },
    [dispatch],
  )
  useEventListener('keydown', handleEsc)

  return (
    <WindowOverlayManagerProvider location={E_Window.characters}>
      <WindowOverlayManager overlays={overlays} />
      <S.Wrapper>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
        <AddCard onClick={handleOpenCreateCharacterOverlay}>
          <span>{t('windowCharacters.createCharacter')}</span>
          <div>
            <PlusIcon />
          </div>
        </AddCard>
      </S.Wrapper>
    </WindowOverlayManagerProvider>
  )
}
