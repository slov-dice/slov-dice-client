import * as S from './styles'

import RobeIcon from 'assets/icons/app/robe.svg'
import WingedSwordIcon from 'assets/icons/game/winged-sword.svg'
import { t } from 'languages'
import * as C from 'styles/components'

export const Players = () => {
  return (
    <S.Wrapper>
      <S.GameMasterWrapper>
        <S.FloatTitle>{t('landing.players.master.title')}</S.FloatTitle>
        <S.FeatureSection>
          <li>{t('landing.players.master.feature1')}</li>
          <li>{t('landing.players.master.feature2')}</li>
          <li>{t('landing.players.master.feature3')}</li>
        </S.FeatureSection>
        <S.ParagraphSection>{t('landing.players.master.paragraph1')}</S.ParagraphSection>
        <C.Divider />
        <S.ParagraphSection>{t('landing.players.master.paragraph2')}</S.ParagraphSection>
        <S.IconSection>
          <RobeIcon />
        </S.IconSection>
      </S.GameMasterWrapper>
      <S.PlayerWrapper>
        <S.FloatTitle>{t('landing.players.player.title')}</S.FloatTitle>
        <S.FeatureSection>
          <li>{t('landing.players.player.feature1')}</li>
          <li>{t('landing.players.player.feature2')}</li>
          <li>{t('landing.players.player.feature3')}</li>
        </S.FeatureSection>
        <S.ParagraphSection>{t('landing.players.player.paragraph1')}</S.ParagraphSection>
        <S.IconSection>
          <WingedSwordIcon />
        </S.IconSection>
      </S.PlayerWrapper>
    </S.Wrapper>
  )
}
