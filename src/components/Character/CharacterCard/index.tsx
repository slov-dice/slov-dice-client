import * as S from './styles'

import { CharacterBar } from '../CharacterBar'
import { CharacterEffect } from '../CharacterEffect'
import { CharacterLevel } from '../CharacterLevel'
import { CharacterSpecial } from '../CharacterSpecial'

import EditIcon from 'assets/icons/app/edit.svg'
import { I_Character } from 'models/game/character'
import * as C from 'styles/components'

interface I_CharacterCardProps {
  character: I_Character
}

export const CharacterCard = ({ character }: I_CharacterCardProps) => {
  return (
    <S.Card>
      <S.LeftSection>
        <CharacterLevel characterId={character.id} level={character.level} />
        <S.Avatar alt='avatar' src={character.avatar} />
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
          </S.WrapperEffects>
          <S.Actions>
            <C.Control>
              <EditIcon />
            </C.Control>
          </S.Actions>
        </S.WrapperInfo>
      </S.RightSection>
    </S.Card>
  )
}
