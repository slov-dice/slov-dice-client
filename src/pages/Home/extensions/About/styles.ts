import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const About = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.order.content};

  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.black};
`

export const AboutInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  width: 100%;
  max-width: 1268px;
  margin: 0 auto;
  padding: 164px 24px 81px;

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
  }
`

export const Title = styled.div`
  user-select: none;

  position: absolute;
  top: -2.5%;
  left: 5%;

  font-size: 112px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white_30};
  text-transform: uppercase;

  @media (max-width: 968px) {
    top: 0;
    left: 0;

    font-size: 72px;
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
    padding: 0 24px;
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

  max-width: 400px;

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
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 6px;
  align-items: center;
  justify-self: center;

  width: 100%;
  max-width: 100%;

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    gap: 12px;

    width: 100%;
    max-width: 525px;
    margin: 0 auto;
    padding: 0 24px;
  }
`

export const Media = styled.div`
  width: 172px;
  max-width: 172px;
  height: 172px;
  max-height: 172px;

  border: 1px solid #999;

  @media (max-width: 968px) {
    width: 172px;
    max-width: 172px;
    height: 172px;
    max-height: 172px;
  }
`
