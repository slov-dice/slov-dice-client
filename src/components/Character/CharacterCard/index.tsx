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
import { I_Character, T_CharacterBarId, T_CharacterSpecialId } from 'models/shared/game/character'
import * as C from 'styles/components'
import { getBar, getEffect, getSpecial } from 'utils/game/effects'

interface I_CharacterCardProps {
  character: I_Character
}

export const CharacterCard = ({ character }: I_CharacterCardProps) => {
  const {
    openCharacterWindowOverlay,
    setCharacterEditor,
    emitUpdateCharacterFieldInCharactersWindow,
  } = useActions()

  const settings = useStoreSelector((store) => store.room.game.characters.settings)

  const handleOpenUpdateCharacterOverlay = () => {
    setCharacterEditor(character)
    openCharacterWindowOverlay({
      name: E_WindowOverlay.updateCharacter,
      isOpen: true,
      payload: character.id,
    })
  }

  const handleChangeCharacterLevel = (value: number) => {
    emitUpdateCharacterFieldInCharactersWindow({ characterId: character.id, field: 'level', value })
  }

  const handleChangeCharacterName = (value: string) => {
    emitUpdateCharacterFieldInCharactersWindow({ characterId: character.id, field: 'name', value })
  }

  const handleChangeCharacterBar = (id: T_CharacterBarId, value: number) => {
    emitUpdateCharacterFieldInCharactersWindow({
      characterId: character.id,
      field: 'bars',
      value,
      subFieldId: id,
    })
  }

  const handleChangeCharacterSpecial = (id: T_CharacterSpecialId, value: number) => {
    emitUpdateCharacterFieldInCharactersWindow({
      characterId: character.id,
      field: 'specials',
      value,
      subFieldId: id,
    })
  }

  const handleRemoveCharacterEffect = (effectId: string) => {
    emitUpdateCharacterFieldInCharactersWindow({
      characterId: character.id,
      field: 'effects',
      value: effectId,
    })
  }

  return (
    <S.CardWrapper>
      <S.LeftSection>
        <CharacterLevel onChange={handleChangeCharacterLevel} value={character.level} />
        <CharacterAvatar image={character.avatar} characterId={character.id} />
        <S.BarsWrapper>
          {character.bars.map((bar) => {
            const baseBar = getBar(bar.id, settings.bars)
            return (
              <CharacterBar
                key={bar.id}
                onChange={handleChangeCharacterBar}
                bar={{ ...bar, ...baseBar }}
              />
            )
          })}
        </S.BarsWrapper>
      </S.LeftSection>
      <S.RightSection>
        <S.NameWrapper>
          <CharacterName value={character.name} onChange={handleChangeCharacterName} />
        </S.NameWrapper>
        <S.InfoWrapper>
          <div>
            {character.specials.map((special) => {
              const baseSpecial = getSpecial(special.id, settings.specials)
              return (
                <CharacterSpecial
                  key={special.id}
                  special={{ ...special, ...baseSpecial }}
                  onChange={handleChangeCharacterSpecial}
                />
              )
            })}
          </div>
          <S.EffectsWrapper>
            {character.effects.map((effectId) => {
              const effect = getEffect(effectId, settings.effects)
              return (
                <CharacterEffect
                  key={effect.id}
                  effect={effect}
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
