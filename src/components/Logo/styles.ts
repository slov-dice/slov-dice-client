import styled, { css } from 'styled-components'

import { neon } from './keyframes'

export const Container = styled.div<{ relative: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 48px;
  letter-spacing: -6px;

  animation: ${neon} 2s alternate-reverse infinite;

  ${({ relative }) =>
    relative
      ? css`
          position: relative;
        `
      : css`
          position: absolute;
          right: 50%;
          transform: translate(50%);
        `}

  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.colors.primary};
`

export const Text = styled.span`
  cursor: pointer;
  user-select: none;
`
