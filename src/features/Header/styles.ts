import { motion } from 'framer-motion'
import styled from 'styled-components'

import { headerAttrs, wrapperControlAttrs } from './motion'

interface I_Header {
  isTransparent: boolean
}

export const Header = styled(motion.header).attrs<I_Header>(({ theme, isTransparent }) =>
  headerAttrs(isTransparent, theme),
)<I_Header>`
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

export const WrapperControl = styled(motion.div).attrs<{ sideMenuVisible: boolean }>(
  ({ sideMenuVisible }) => wrapperControlAttrs(sideMenuVisible),
)<{ sideMenuVisible: boolean }>``
