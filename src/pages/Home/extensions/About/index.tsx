import * as S from './styles'

import { t } from 'languages'
import { E_Routes } from 'models/routes'
import * as C from 'styles/components'

export const About = () => {
  return (
    <S.About>
      <S.Title>{t('landing.about.title')}</S.Title>
      <S.AboutInner>
        <S.InfoBox>
          <S.InfoTitle>{t('landing.about.infoTitle')}</S.InfoTitle>
          <S.InfoContent>
            <div>{t('landing.about.paragraph1')}</div>
            <C.Divider />

            <div>{t('landing.about.paragraph2')}</div>
            <C.Divider />
            <S.InfoTitle>{t('landing.about.featuresTitle')}</S.InfoTitle>
            <S.Features>
              <C.Divider h={24} md={16} />
              <S.FeaturesList>
                <li>{t('landing.about.feature1')}</li>
                <li>{t('landing.about.feature2')}</li>
                <li>{t('landing.about.feature3')}</li>
                <li>{t('landing.about.feature4')}</li>
                <li>{t('landing.about.feature5')}</li>
                <li>{t('landing.about.feature6')}</li>
                <li>{t('landing.about.feature7')}</li>
              </S.FeaturesList>
            </S.Features>
          </S.InfoContent>
          <div>
            <S.InfoMoreButton to={E_Routes.lobby}>{t('landing.about.start')}</S.InfoMoreButton>
          </div>
        </S.InfoBox>
        <S.MediaBox>
          <S.Media />
          <S.Media />
          <S.Media />
          <S.Media />
          <S.Media />
          <S.Media />
        </S.MediaBox>
      </S.AboutInner>
    </S.About>
  )
}
