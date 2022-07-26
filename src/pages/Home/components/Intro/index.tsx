import * as S from './styles'

import { HeroBackground } from 'features/HeroBackground'

export enum E_ParagraphType {
  first = 'first',
  second = 'second',
}

export const Intro = () => {
  return (
    <S.IntroWrapper>
      <S.Intro>
        <S.IntroParagraphBox type={E_ParagraphType.first}>
          <S.IntroParagraph type={E_ParagraphType.first}>
            Площадка для проведения D&D сценариев
          </S.IntroParagraph>
        </S.IntroParagraphBox>
        <S.LogoTextBox>
          <S.LogoText>Slov</S.LogoText>
          <S.LogoText>Dice</S.LogoText>
        </S.LogoTextBox>
        <S.IntroParagraphBox type={E_ParagraphType.second}>
          <S.IntroParagraph type={E_ParagraphType.second}>
            Все необходимые инструменты, разносторонние реализации механик, гибкая настройка,
            комфортное время препровождения
          </S.IntroParagraph>
        </S.IntroParagraphBox>
      </S.Intro>
      <HeroBackground />
    </S.IntroWrapper>
  )
}
