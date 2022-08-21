import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { Button } from 'components/Buttons'
import { HeroBackground } from 'features/HeroBackground'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { t } from 'languages'
import { E_Routes } from 'models/routes'
import { E_MediaQuery } from 'styles/theme'

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
              <S.LogoTextMobile>{t('landing.intro.title1')}</S.LogoTextMobile>
              <S.LogoTextMobile>{t('landing.intro.title2')}</S.LogoTextMobile>
            </S.LogoTextBoxMobile>
            <S.SectionBoxMobile>
              <S.SectionParagraphMobile>{t('landing.intro.paragraph1')}</S.SectionParagraphMobile>
            </S.SectionBoxMobile>
            <S.SectionBoxMobile>
              <S.SectionFeaturesMobile>
                <li>{t('landing.intro.feature1')}</li>
                <li>{t('landing.intro.feature2')}</li>
                <li>{t('landing.intro.feature3')}</li>
                <li>{t('landing.intro.feature4')}</li>
              </S.SectionFeaturesMobile>
            </S.SectionBoxMobile>
          </S.TopSectionMobile>
        ) : (
          <S.TopSection>
            <S.SectionBox type={E_ParagraphType.first}>
              <S.SectionParagraph>{t('landing.intro.paragraph1')}</S.SectionParagraph>
            </S.SectionBox>
            <S.LogoTextBox>
              <S.LogoText>{t('landing.intro.title1')}</S.LogoText>
              <S.LogoText>{t('landing.intro.title2')}</S.LogoText>
            </S.LogoTextBox>
            <S.SectionBox type={E_ParagraphType.second}>
              <S.SectionFeatures>
                <li>{t('landing.intro.feature1')}</li>
                <li>{t('landing.intro.feature2')}</li>
                <li>{t('landing.intro.feature3')}</li>
                <li>{t('landing.intro.feature4')}</li>
              </S.SectionFeatures>
            </S.SectionBox>
          </S.TopSection>
        )}
        <S.BottomSection>
          <Button onClick={() => navigate(E_Routes.lobby)}>{t('landing.intro.start')}</Button>
        </S.BottomSection>
      </S.Intro>
      <HeroBackground />
    </S.IntroWrapper>
  )
}
