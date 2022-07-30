import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { Button } from 'components/Button'
import { HeroBackground } from 'features/HeroBackground'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { t } from 'languages'
import * as C from 'styles/components'
import { E_MediaQuery } from 'styles/theme'
import { E_Routes } from 'utils/constants/routes'

export enum E_ParagraphType {
  first = 'first',
  second = 'second',
}

export const Intro = () => {
  const isMatch = useMediaQuery(E_MediaQuery.lg)
  const navigate = useNavigate()

  return (
    <S.IntroWrapper>
      <S.Intro>
        {isMatch ? (
          <S.TopSectionMobile>
            <S.LogoTextBoxMobile>
              <S.LogoTextMobile>{t('landing.title1')}</S.LogoTextMobile>
              <S.LogoTextMobile>{t('landing.title2')}</S.LogoTextMobile>
            </S.LogoTextBoxMobile>
            <S.SectionBoxMobile>
              <S.SectionParagraphMobile>{t('landing.paragraph1')}</S.SectionParagraphMobile>
            </S.SectionBoxMobile>
            <S.SectionBoxMobile>
              <S.SectionFeaturesMobile>
                <li>Разносторонние реализации механик</li>
                <li>Комфортное время препровождения</li>
                <li>Все необходимые инструменты</li>
                <li>Гибкая настройка</li>
              </S.SectionFeaturesMobile>
            </S.SectionBoxMobile>
          </S.TopSectionMobile>
        ) : (
          <S.TopSection>
            <S.SectionBox type={E_ParagraphType.first}>
              <S.SectionParagraph>{t('landing.paragraph1')}</S.SectionParagraph>
            </S.SectionBox>
            <S.LogoTextBox>
              <S.LogoText>{t('landing.title1')}</S.LogoText>
              <S.LogoText>{t('landing.title2')}</S.LogoText>
            </S.LogoTextBox>
            <S.SectionBox type={E_ParagraphType.second}>
              <S.SectionFeatures>
                <li>Разносторонние реализации механик</li>
                <li>Комфортное время препровождения</li>
                <li>Все необходимые инструменты</li>
                <li>Гибкая настройка</li>
              </S.SectionFeatures>
            </S.SectionBox>
          </S.TopSection>
        )}
        <C.Brick h={48} />
        <S.BottomSection>
          <Button onClick={() => navigate(E_Routes.auth)} fullWidth>
            {t('landing.start')}
          </Button>
        </S.BottomSection>
      </S.Intro>
      <HeroBackground />
    </S.IntroWrapper>
  )
}
