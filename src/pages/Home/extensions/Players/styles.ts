import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  justify-content: center;

  max-width: 1334px;
  margin-inline: auto;
  padding-block: 81px;

  @media (max-width: 1330px) {
    padding-block: 28px;
  }

  @media (max-width: 968px) {
    gap: 0;
  }
`
export const GameMasterWrapper = styled.div`
  position: relative;

  max-width: 634px;
  padding: 148px 24px 64px;

  &::before {
    content: '';

    position: absolute;
    top: 45px;
    right: -24px;
    transform-origin: bottom right;

    width: 1px;
    height: 95%;

    opacity: 0.9;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 3px;
  }

  @media (max-width: 1330px) {
    padding: 90px 24px 32px;

    &::before {
      top: auto;
      bottom: 12px;
      left: 0;

      width: 95%;
      height: 1px;
    }
  }
`

export const PlayerWrapper = styled.div`
  position: relative;

  max-width: 634px;
  padding: 148px 24px 64px;

  @media (max-width: 1330px) {
    padding: 90px 24px 32px;
  }
`

export const IconSection = styled.div`
  position: absolute;
  top: 32px;
  right: 0;

  width: 256px;
  height: 256px;

  opacity: 0.2;

  rotate: 15deg;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1330px) {
    bottom: 64px;

    width: 172px;
    height: 172px;
  }
`

export const FloatTitle = styled.span`
  user-select: none;

  position: absolute;
  z-index: 1;
  top: -2.5%;
  left: 0;

  font-size: 112px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white_80};
  text-transform: uppercase;

  @media (max-width: 1330px) {
    top: 0;
    left: 0;

    font-size: 72px;
  }

  @media (max-width: 600px) {
    font-size: 48px;
  }
`

export const FeatureSection = styled.ul`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 32px;

  &::before {
    content: '';

    position: absolute;
    bottom: -8px;

    width: 35%;
    height: 1px;

    background: ${({ theme }) => theme.colors.white_80};
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

export const ParagraphSection = styled.p``
