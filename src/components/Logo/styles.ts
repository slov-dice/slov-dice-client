import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Container = styled(motion.div).attrs(({ theme }) => ({
  initial: {
    textShadow: `0 0 10px ${theme.colors.primary}, 0 0 40px ${theme.colors.primary}, 0 0 100px ${theme.colors.primary}`,
  },
  animate: {
    textShadow: `0 0 5px ${theme.colors.primary}, 0 0 20px ${theme.colors.primary}, 0 0 60px ${theme.colors.primary}`,
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: 'reverse',
  },
}))<{ relative: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -6px;

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

export const Link = styled.a`
  cursor: pointer;
  user-select: none;
`
