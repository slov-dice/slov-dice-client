import * as S from './styles'

import GithubIcon from 'assets/icons/app/github.svg'
import ToolsIcon from 'assets/icons/app/tools.svg'
import { t } from 'languages'
import * as C from 'styles/components'

export const Outro = () => {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.FloatTitle>{t('landing.outro.title')}</S.FloatTitle>
        <S.SupportWrapper>
          <S.FloatTitle subTitle>{t('landing.outro.participants')}</S.FloatTitle>
          <S.FeaturesList>
            <li>
              <C.LinkBlank to='https://github.com/kotofenum'>Kotofenum</C.LinkBlank>
            </li>
            <li>
              <C.LinkBlank to='https://github.com/anton-pribora'>Anton Pribora</C.LinkBlank>
            </li>
            <li>
              <C.LinkBlank to='https://github.com/Braxify'>Braxify</C.LinkBlank>
            </li>
            <li>
              <C.LinkBlank to='https://github.com/xionerrr'>Xionerrr</C.LinkBlank>
            </li>
          </S.FeaturesList>
          <S.IconWrapper>
            <GithubIcon />
          </S.IconWrapper>
        </S.SupportWrapper>
        <S.ToolsWrapper>
          <S.FloatTitle subTitle>{t('landing.outro.resources')}</S.FloatTitle>
          <S.FeaturesList>
            <li>
              <C.LinkBlank to='https://game-icons.net'>Game Icons</C.LinkBlank>
            </li>
            <li>
              <C.LinkBlank to='https://midjourney.com'>Midjourney</C.LinkBlank>
            </li>
          </S.FeaturesList>
          <S.IconWrapper>
            <ToolsIcon />
          </S.IconWrapper>
        </S.ToolsWrapper>
      </S.Inner>
      <S.Copyright>
        <div>
          <C.LinkBlank to='https://github.com/YaroslavWeb'>YaroslavWeb</C.LinkBlank> ©2023 — Slov
          Dice
        </div>
      </S.Copyright>
    </S.Wrapper>
  )
}
