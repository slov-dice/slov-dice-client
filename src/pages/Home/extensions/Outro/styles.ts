import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.order.content};

  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.black};
`

export const Inner = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  justify-content: center;

  width: 100%;
  max-width: 1334px;
  margin: 0 auto;
  padding: 218px 0 81px;

  @media (max-width: 1330px) {
    padding: 90px 24px 48px;
  }
`

export const FloatTitle = styled.div<{ subTitle?: boolean }>`
  user-select: none;

  position: absolute;
  top: ${({ subTitle }) => (subTitle ? 2 : -2.5)}%;
  left: ${({ subTitle }) => (subTitle ? 2 : 0)}%;

  font-size: ${({ subTitle }) => (subTitle ? 56 : 112)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white_80};
  text-transform: uppercase;

  @media (max-width: 1330px) {
    top: 0;
    top: ${({ subTitle }) => (subTitle ? 4 : 0)}%;
    left: ${({ subTitle }) => (subTitle ? 2 : 0)}%;

    font-size: ${({ subTitle }) => (subTitle ? 32 : 72)}px;
  }

  @media (max-width: 600px) {
    font-size: ${({ subTitle }) => (subTitle ? 32 : 48)}px;
  }
`

export const SupportWrapper = styled.div`
  position: relative;

  width: 634px;
  max-width: 634px;
  min-height: 180px;
  padding: 72px 24px 32px;

  box-shadow: rgb(35 35 36) 3px 3px 0 0 inset, rgb(23 21 21 / 50%) 0 0 20px 7px inset;

  @media (max-width: 1330px) {
    padding: 48px 24px 32px;
  }
`

export const ToolsWrapper = styled.div`
  position: relative;

  width: 634px;
  max-width: 634px;
  min-height: 180px;
  padding: 72px 24px 32px;

  box-shadow: rgb(35 35 36) 3px 3px 0 0 inset, rgb(23 21 21 / 50%) 0 0 20px 7px inset;

  @media (max-width: 1330px) {
    padding: 48px 24px 32px;
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 24px;

  width: 212px;
  height: 212px;

  opacity: 0.2;

  rotate: 15deg;

  svg {
    width: 100%;
    height: 100%;

    fill: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 1330px) {
    bottom: 32px;

    width: 172px;
    height: 172px;
  }

  @media (max-width: 600px) {
    bottom: 72px;

    width: 124px;
    height: 124px;
  }
`

export const FeaturesList = styled.ul`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

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

export const Copyright = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 90px;

  :before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background: ${({ theme }) => theme.colors.primary_50};
  }
`
