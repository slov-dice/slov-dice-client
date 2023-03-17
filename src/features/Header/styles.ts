import { motion } from 'framer-motion'
import styled from 'styled-components'

import { headerAttrs, tabsControlAttrs, wrapperControlAttrs } from './motion'

interface I_Header {
  $isTransparent: boolean
}

export const Header = styled(motion.header).attrs<I_Header>(({ theme, $isTransparent }) =>
  headerAttrs($isTransparent, theme),
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

export const WrapperControl = styled(motion.div).attrs<{ $sideMenuVisible: boolean }>(
  ({ $sideMenuVisible }) => wrapperControlAttrs($sideMenuVisible),
)<{ $sideMenuVisible: boolean }>`
  display: flex;
`

export const TileControl = styled(motion.div).attrs(({ theme }) => tabsControlAttrs(theme))`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
`

export const TileControlItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 10%;
`
