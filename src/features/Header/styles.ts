import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Header = styled(motion.header).attrs<{ isTop: boolean }>(({ theme, isTop }) => ({
  initial: { y: -theme.sizes.header.height * 2 },
  animate: isTop ? 'isTop' : 'scrollable',
  exit: { y: -theme.sizes.header.height * 2 },
  transition: { type: 'spring', stiffness: 50 },
  variants: {
    isTop: {
      y: 0,
      backgroundColor: theme.colors.black_00,
      boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
    },
    scrollable: {
      y: 0,
      backgroundColor: theme.colors.black,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    },
  },
}))<{ isTop: boolean }>`
  position: fixed;
  z-index: ${({ theme }) => theme.order.header};
  top: 0;

  display: grid;
  grid: 1fr / 1fr 4fr;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.sizes.header.height}px;
  padding: 0 16px;
`
