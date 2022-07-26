import styled, { css, DefaultTheme } from 'styled-components'

import { E_ParagraphType } from './'

export const IntroWrapper = styled.div`
  position: relative;

  overflow: hidden;

  height: max(800px, 100vh);
  padding-top: 96px;

  background: linear-gradient(0deg, #211b29 0%, #212121 100%);
`

export const Intro = styled.div`
  position: relative;
  z-index: 5;

  display: flex;
  gap: 24px;
  justify-content: center;
`

interface I_IntroParagraphBox {
  type: E_ParagraphType
}

export const IntroParagraphBox = styled.div<I_IntroParagraphBox>`
  display: flex;
  align-items: ${({ type }) => (type === E_ParagraphType.first ? 'flex-start' : 'flex-end')};
  justify-content: center;

  width: 100%;
  max-width: 256px;
`

interface I_IntroParagraphProps {
  type: E_ParagraphType
}

export const IntroParagraph = styled.p<I_IntroParagraphProps>`
  position: relative;

  width: 100%;
  height: fit-content;
  margin-bottom: calc(100% - 48px);

  font-size: 16px;

  ${({ type, theme }) => getParagraphVariants(type, theme)}
`

const getParagraphVariants = (type: E_ParagraphType, theme: DefaultTheme) => {
  switch (type) {
    case E_ParagraphType.first:
      return css`
        margin-top: 100%;

        &::before {
          content: '';

          position: absolute;
          top: -16px;

          width: 15%;
          height: 1px;

          background: ${theme.colors.crimson};
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

    case E_ParagraphType.second:
      return css`
        margin-bottom: calc(100% - 48px);

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
      `
  }
}

export const LogoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: fit-content;
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
