import { motion, Transition, Variants } from 'framer-motion'
import styled from 'styled-components'

export const Loader = styled(motion.div)`
  user-select: none;

  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 68px;
  height: 68px;

  background: transparent;
`

export const Dot = styled(motion.div).attrs(({ theme }) => ({
  variants: {
    loading: {
      opacity: 1,
      x: [-18, 18],
      y: [0, -30],
      boxShadow: [
        `0 0 5px ${theme.colors.primary}, 0 0 20px ${theme.colors.primary}, 0 0 50px ${theme.colors.primary}`,
        `0 0 2px ${theme.colors.primary}, 0 0 10px ${theme.colors.primary}, 0 0 30px ${theme.colors.primary}`,
      ],
      transition: {
        x: { repeatType: 'reverse', repeat: Infinity, duration: 0.8 },
        y: { repeatType: 'reverse', repeat: Infinity, duration: 0.4, ease: 'easeOut' },
        boxShadow: { repeatType: 'reverse', repeat: Infinity, duration: 3 },
      },
    },
    success: {
      scale: 1.5,
      x: 0,
      y: -20,
    },
    error: {
      scale: 1.5,
      x: 0,
      y: -20,
      boxShadow: [
        `0 0 5px ${theme.colors.primary}, 0 0 20px ${theme.colors.primary}, 0 0 50px ${theme.colors.primary}`,
        `0 0 2px ${theme.colors.primary}, 0 0 10px ${theme.colors.primary}, 0 0 30px ${theme.colors.primary}`,
      ],
      transition: {
        boxShadow: { repeatType: 'reverse', repeat: Infinity, duration: 3 },
      },
    },
  },
}))`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`
