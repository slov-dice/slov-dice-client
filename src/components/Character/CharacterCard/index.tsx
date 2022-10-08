import * as S from './styles'

import {
  AddCharacterEffect,
  CharacterAvatar,
  CharacterBar,
  CharacterEffect,
  CharacterLevel,
  CharacterSpecial,
} from '../'

import EditIcon from 'assets/icons/app/edit.svg'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { I_Character } from 'models/game/character'
import * as C from 'styles/components'

interface I_CharacterCardProps {
  character: I_Character
}

export const CharacterCard = ({ character }: I_CharacterCardProps) => {
  const { openCharacterWindowOverlay, setCharacterLevel } = useActions()

  const handleOpenUpdateCharacterOverlay = () => {
    openCharacterWindowOverlay(E_WindowOverlay.updateCharacter)
  }

  const handleChangeCharacterLevel = (value: number) => {
    setCharacterLevel({ characterId: character.id, levelValue: value })
  }

  return (
    <S.Card>
      <S.LeftSection>
        <CharacterLevel onChange={handleChangeCharacterLevel} value={character.level} />
        <CharacterAvatar image={character.avatar} />
        <S.WrapperBars>
          {character.bars.map((bar) => (
            <CharacterBar key={bar.name} characterId={character.id} values={bar} />
          ))}
        </S.WrapperBars>
      </S.LeftSection>
      <S.RightSection>
        <S.LabelName>{character.name}</S.LabelName>
        <S.WrapperInfo>
          <div>
            {character.specials.map((special) => (
              <CharacterSpecial key={special.name} characterId={character.id} values={special} />
            ))}
          </div>
          <S.WrapperEffects>
            {character.effects.map((effect) => (
              <CharacterEffect key={effect.name} effect={effect} characterId={character.id} />
            ))}
            <AddCharacterEffect />
          </S.WrapperEffects>
          <S.Actions>
            <C.Control onClick={handleOpenUpdateCharacterOverlay}>
              <EditIcon />
            </C.Control>
          </S.Actions>
        </S.WrapperInfo>
      </S.RightSection>
    </S.Card>
  )
}
