import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { E_Locale } from 'models/shared/app'

export const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.order.content};

  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.black};
`

export const Inner = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 64px;

  width: 100%;
  max-width: 1268px;
  margin: 0 auto;
  padding: 164px 24px 81px;

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    gap: 24px;

    padding: 90px 24px 48px;
  }
`

export const FloatTitle = styled.div`
  user-select: none;

  position: absolute;
  top: -2.5%;
  left: 0;

  font-size: 112px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white_80};
  text-transform: uppercase;

  @media (max-width: 968px) {
    top: 0;
    left: 0;

    font-size: 72px;
  }

  @media (max-width: 600px) {
    font-size: 48px;
  }
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    max-width: 525px;
    margin: 0 auto;
  }
`

export const InfoTitle = styled.div`
  position: relative;

  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;

  &::before {
    content: '';

    position: absolute;
    top: 50%;
    left: -96px;

    width: 72px;
    height: 1px;

    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 32%);
  }

  @media (max-width: 1472px) {
    &::before {
      display: none;
    }
  }
`

export const InfoContent = styled.div`
  position: relative;

  max-width: 600px;

  &::before {
    content: '';

    position: absolute;
    top: 50%;
    left: -48px;

    width: 32px;
    height: 1px;

    background: ${({ theme }) => theme.colors.white};
  }

  &::after {
    content: '';

    position: absolute;
    top: 12%;
    left: -48px;

    width: 24px;
    height: 1px;

    background: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 1472px) {
    &::before {
      display: none;
    }

    &::after {
      display: none;
    }
  }
`

export const Features = styled.div``

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

export const InfoMoreButton = styled(Link)`
  position: relative;

  font-size: 16px;
  color: #fff;

  &::before {
    content: '';

    position: absolute;
    top: 50%;
    right: -42px;

    width: 32px;
    height: 1px;

    background: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';

    position: absolute;
    bottom: -25%;
    left: 0;

    width: 24px;
    height: 2px;

    background: ${({ theme }) => theme.colors.primary};
  }
`

export const MediaBox = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
`

export const YTPlayer = styled.iframe.attrs<{ language: E_Locale }>(({ language }) => ({
  src:
    language === E_Locale.ru
      ? 'https://www.youtube.com/embed/ZrdLM5hTmr0'
      : 'https://www.youtube.com/embed/ANdG2DGm0CQ',
  title: 'YouTube video player',
  frameBorder: '0',
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  allowFullScreen: true,
}))<{ language: E_Locale }>`
  width: 100%;
  height: 100%;
`
