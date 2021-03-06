import styled from 'styled-components'

import { neon } from './keyframes'

export const Container = styled.div`
  position: absolute;
  right: 50%;
  transform: translate(50%);

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 48px;
  letter-spacing: -6px;

  animation: ${neon} 2s alternate-reverse infinite;

  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.colors.crimson};
`

export const Text = styled.span`
  cursor: pointer;
  user-select: none;
`
