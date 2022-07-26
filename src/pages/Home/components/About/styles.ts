import styled from 'styled-components'

export const About = styled.div`
  z-index: 5;

  overflow: hidden;

  background-color: #1e1939;
`

export const AboutInner = styled.div`
  position: relative;

  display: flex;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 164px 0;
`

export const Title = styled.div`
  user-select: none;

  position: absolute;
  top: -28px;

  font-size: 128px;
  font-weight: 500;
  text-transform: uppercase;

  opacity: 0.25;
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`

export const InfoTitle = styled.h2`
  position: relative;

  font-size: 42px;
  font-weight: 300;
  text-transform: uppercase;

  &::before {
    content: '';

    position: absolute;
    top: 50%;
    left: -96px;

    width: 72px;
    height: 1px;

    background: #fff;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 32%);
  }
`

export const InfoSubTitle = styled.span`
  position: relative;

  font-size: 24px;
  font-weight: 400;
  color: #484268;

  &::before {
    content: '';

    position: absolute;
    top: 50%;
    left: -48px;

    width: 24px;
    height: 1px;

    background: #fff;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 32%);
  }
`

export const InfoMoreButton = styled.button``
