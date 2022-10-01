import * as S from './styles'

import { I_Character } from 'models/game/character'

interface I_CharacterCardProps {
  character: I_Character
}

export const CharacterCard = ({ character }: I_CharacterCardProps) => {
  return (
    <S.Card>
      <S.LeftSection>
        <S.WrapperLevel>
          <S.LabelLevel>УРОВЕНЬ {character.level}</S.LabelLevel>
        </S.WrapperLevel>
        <S.Avatar alt='avatar' src={character.avatar} />
        <div>
          {character.bars.map((bar) => (
            <div key={bar.name}>
              {bar.current}/{bar.max}
            </div>
          ))}
        </div>
      </S.LeftSection>
      <div>
        <div>{character.name}</div>
        <div>
          <div>Характеристики</div>
          {character.specials.map((special) => (
            <div key={special.name}>
              {special.name}: {special.current}
            </div>
          ))}
        </div>
        <div>
          <div>Эффекты</div>
          {character.effects.map((effect) => (
            <div key={effect.name}>{effect.name[0]}</div>
          ))}
        </div>
      </div>
    </S.Card>
  )
}
