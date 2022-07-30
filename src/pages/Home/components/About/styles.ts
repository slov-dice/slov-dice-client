import styled from 'styled-components'

export const About = styled.div`
  position: relative;
  z-index: 5;

  overflow: hidden;

  background-color: #1e1939;
`

export const AboutInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  width: 100%;
  max-width: 1268px;
  margin: 0 auto;
  padding: 164px 24px;

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

  font-family: Arial, sans-serif;
  font-size: 112px;
  font-weight: 600;
  text-transform: uppercase;

  opacity: 0.35;

  @media (max-width: 968px) {
    top: -1%;
    left: 0%;

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

export const InfoTitle = styled.h2`
  position: relative;

  font-size: 42px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 6px;

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

  @media (max-width: 1472px) {
    &::before {
      display: none;
    }
  }
`

export const InfoSubTitle = styled.p`
  position: relative;

  font-size: 15px;
  font-weight: 500;
  color: #4e486e;
  word-break: break-all;

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

  @media (max-width: 1472px) {
    &::before {
      display: none;
    }
  }
`

export const InfoMoreButton = styled.button`
  cursor: pointer;

  position: relative;

  font-family: Rubik, sans-serif;
  font-size: 16px;
  color: #fff;

  background-color: transparent;
  border: 0;
  outline: 0;

  &::before {
    content: '';

    position: absolute;
    top: 50%;
    right: -42px;

    width: 32px;
    height: 1px;

    background: #3c2051;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 32%);
  }

  &::after {
    content: '';

    position: absolute;
    bottom: -25%;
    left: 0;

    width: 24px;
    height: 2px;

    background: #3c2051;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 32%);
  }
`

export const MediaBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
