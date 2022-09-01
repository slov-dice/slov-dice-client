import { motion } from 'framer-motion'
import styled from 'styled-components'

import { navigationItemAttrs } from './motion'

export const NavigationItem = styled(motion.li).attrs(({ theme }) => navigationItemAttrs(theme))`
  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;

  margin-bottom: 6px;
  padding: 4px 4px 4px 0;

  color: ${({ theme }) => theme.colors.white};

  border-radius: 5px;
`

export const NavigationDivider = styled(motion.li)`
  width: 100%;
  height: 2px;
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.white_50};
`

export const NavigationItemIcon = styled(motion.div)`
  display: flex;
  flex: 40px 0;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  margin-right: 20px;

  svg {
    width: 28px;
    height: 28px;

    fill: ${({ theme }) => theme.colors.white};
  }
`

export const NavigationItemText = styled.div`
  flex: 1;

  width: 200px;
  height: 20px;

  font-size: 16px;
`
