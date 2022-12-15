import styled from 'styled-components'

import { glowSpin } from 'styles/animations'

export const Wrapper = styled.div`
  position: relative;

  overflow: hidden;

  width: min(${({ theme }) => theme.sizes.authForm.width}px, 100%);
  height: ${({ theme }) => theme.sizes.authForm.height}px;
  padding: 2px;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 50%) 0 6px 12px -2px, rgba(0, 0, 0, 65%) 0 3px 7px -3px;

  :before {
    content: '';

    position: absolute;
    top: -50%;
    left: -50%;
    transform-origin: bottom right;

    width: 100%;
    height: 100%;

    background-image: linear-gradient(
      0deg,
      hsl(266deg 61% 26%) 0%,
      hsl(281deg 63% 28%) 21%,
      hsl(294deg 64% 29%) 30%,
      hsl(306deg 68% 31%) 39%,
      hsl(315deg 73% 36%) 46%,
      hsl(321deg 75% 40%) 54%,
      hsl(327deg 74% 45%) 61%,
      hsl(333deg 72% 50%) 69%,
      hsl(339deg 85% 56%) 79%,
      hsl(345deg 100% 62%) 100%
    );

    animation: ${glowSpin} 12s infinite linear;
  }

  :after {
    content: '';

    position: absolute;
    top: -50%;
    left: -50%;
    transform-origin: bottom right;

    width: 100%;
    height: 100%;

    background-image: linear-gradient(
      0deg,
      hsl(266deg 61% 26%) 0%,
      hsl(281deg 63% 28%) 21%,
      hsl(294deg 64% 29%) 30%,
      hsl(306deg 68% 31%) 39%,
      hsl(315deg 73% 36%) 46%,
      hsl(321deg 75% 40%) 54%,
      hsl(327deg 74% 45%) 61%,
      hsl(333deg 72% 50%) 69%,
      hsl(339deg 85% 56%) 79%,
      hsl(345deg 100% 62%) 100%
    );

    animation: ${glowSpin} 12s infinite linear;
    animation-delay: -6s;
  }

  @media ${({ theme }) => theme.media.md} {
    height: 100%;
  }
`

export const Inner = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.order.content};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.black};
  border-radius: 8px;

  @media ${({ theme }) => theme.media.md} {
    background: ${({ theme }) => theme.colors.black};
    border-radius: 0;
  }
`

export const TopSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  padding: 64px 64px 32px;

  @media ${({ theme }) => theme.media.md} {
    padding: 64px 32px 16px;
  }
`

export const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BottomAction = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`

export const BottomSection = styled.div`
  width: 100%;
  height: 120px;

  box-shadow: rgb(0 0 0 / 40%) 0 0 5px;
`
