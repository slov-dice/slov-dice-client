import styled, { css } from 'styled-components'

import { E_ParagraphType } from '.'

export const IntroWrapper = styled.div`
  position: relative;

  overflow: hidden;

  height: max(800px, 100vh);
  padding-top: 96px;
`

export const Intro = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.order.content};
`

export const TopSection = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
`
export const TopSectionMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;

  margin-top: 96px;
`

export const LogoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: fit-content;
`
export const LogoTextBoxMobile = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: center;
`

export const LogoText = styled.div`
  width: 64px;
  padding: 0 10px;

  font-size: 64px;
  text-align: center;
  text-transform: uppercase;
  word-wrap: break-word;

  background-color: transparent;
`

export const LogoTextMobile = styled.div`
  font-size: 96px;
  text-align: center;
  text-transform: uppercase;
  word-wrap: break-word;

  background-color: transparent;

  @media ${({ theme }) => theme.media.sm} {
    font-size: 64px;
  }
`

interface I_SectionBox {
  type: E_ParagraphType
}

export const SectionBox = styled.div<I_SectionBox>`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 312px;

  ${({ type }) =>
    type === E_ParagraphType.first
      ? css`
          align-items: flex-start;
        `
      : css`
          align-items: flex-end;
        `};
`

export const SectionBoxMobile = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`

export const SectionParagraph = styled.p`
  position: relative;

  width: 100%;
  height: fit-content;
  margin-top: calc(100% - 48px);

  font-size: 24px;
  text-align: right;

  &::before {
    content: '';

    position: absolute;
    top: -16px;

    width: 15%;
    height: 1px;

    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 32%);
  }

  &::after {
    content: '';

    position: absolute;
    right: 0;
    bottom: -16px;

    width: 30%;
    height: 1px;

    background: #fff;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 32%);
  }
`

export const SectionParagraphMobile = styled.p`
  @media (min-width: 525px) {
    font-size: 24px;
  }
`

export const SectionFeatures = styled.ul`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
  height: fit-content;
  margin-bottom: calc(100% - 100px);

  &::before {
    content: '';

    position: absolute;
    top: -16px;
    left: 0;

    width: 30%;
    height: 1px;

    background: #fff;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 32%);
  }

  li {
    position: relative;

    &::before {
      content: '';

      position: absolute;
      top: 2px;
      left: -9px;

      width: 3px;
      height: 12px;

      opacity: 0.9;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 3px;
    }
  }
`
export const SectionFeaturesMobile = styled.ul`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;

  li {
    position: relative;

    &::before {
      content: '';

      position: absolute;
      top: 2px;
      left: -9px;

      width: 3px;
      height: 12px;

      opacity: 0.9;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 3px;
    }
  }

  @media (min-width: 525px) {
    font-size: 18px;
  }
`

export const BottomSection = styled.div`
  position: relative;

  max-width: 320px;
  margin: 0 auto;
  margin-top: 5%;

  @media ${({ theme }) => theme.media.lg} {
    margin-top: 20%;
  }
`
