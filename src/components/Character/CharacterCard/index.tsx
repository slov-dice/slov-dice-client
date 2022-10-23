import * as S from './styles'

import {
  AddCharacterEffect,
  CharacterAvatar,
  CharacterBar,
  CharacterEffect,
  CharacterLevel,
  CharacterName,
  CharacterSpecial,
} from '../'

import EditIcon from 'assets/icons/app/edit.svg'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { I_Character } from 'models/game/character'
import * as C from 'styles/components'
import { getEffect } from 'utils/game/effects'

interface I_CharacterCardProps {
  character: I_Character
}

export const CharacterCard = ({ character }: I_CharacterCardProps) => {
  const {
    openCharacterWindowOverlay,
    setCharacterLevel,
    setCharacterBar,
    setCharacterName,
    setCharacterSpecial,
    removeCharacterEffect,
    setCharacterEditor,
  } = useActions()

  const settingsEffects = useStoreSelector((state) => state.gameCharacters.settings.effects)

  const handleOpenUpdateCharacterOverlay = () => {
    setCharacterEditor(character)
    openCharacterWindowOverlay({
      name: E_WindowOverlay.updateCharacter,
      isOpen: true,
      payload: character.id,
    })
  }

  const handleChangeCharacterLevel = (value: number) => {
    setCharacterLevel({ characterId: character.id, levelValue: value })
  }

  const handleChangeCharacterBar = (name: string, value: number) => {
    setCharacterBar({ characterId: character.id, barName: name, barValue: value })
  }

  const handleChangeCharacterName = (value: string) => {
    setCharacterName({ characterId: character.id, nameValue: value })
  }

  const handleChangeCharacterSpecial = (name: string, value: number) => {
    setCharacterSpecial({ characterId: character.id, specialName: name, specialValue: value })
  }

  const handleRemoveCharacterEffect = (effectId: string) => {
    removeCharacterEffect({ characterId: character.id, effectId })
  }

  return (
    <S.CardWrapper>
      <S.LeftSection>
        <CharacterLevel onChange={handleChangeCharacterLevel} value={character.level} />
        <CharacterAvatar image={character.avatar} characterId={character.id} />
        <S.BarsWrapper>
          {character.bars.map((bar) => (
            <CharacterBar key={bar.name} onChange={handleChangeCharacterBar} values={bar} />
          ))}
        </S.BarsWrapper>
      </S.LeftSection>
      <S.RightSection>
        <S.NameWrapper>
          <CharacterName value={character.name} onChange={handleChangeCharacterName} />
        </S.NameWrapper>
        <S.InfoWrapper>
          <div>
            {character.specials.map((special) => (
              <CharacterSpecial
                key={special.name}
                values={special}
                onChange={handleChangeCharacterSpecial}
              />
            ))}
          </div>
          <S.EffectsWrapper>
            {character.effects.map((effectId) => {
              const effect = getEffect(effectId, settingsEffects)
              return (
                <CharacterEffect
                  key={effect.name}
                  values={effect}
                  onRemove={handleRemoveCharacterEffect}
                />
              )
            })}
            <AddCharacterEffect characterId={character.id} />
          </S.EffectsWrapper>
          <S.Actions>
            <C.Control onClick={handleOpenUpdateCharacterOverlay}>
              <EditIcon />
            </C.Control>
          </S.Actions>
        </S.InfoWrapper>
      </S.RightSection>
    </S.CardWrapper>
  )
}
