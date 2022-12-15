import { keyframes } from 'styled-components'

export const glowSpin = keyframes`
 0% {
  rotate: 0deg;
 }

 100% {
  rotate: 360deg;
 }
`

export const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

export const acting = keyframes`
  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
`
