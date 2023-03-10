import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { suggestItemAttrs } from './motion'

export const SuggestsWrapper = styled.div`
  user-select: none;

  position: absolute;
  z-index: 10;

  background-color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.white_05};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 10%) 0 6px 12px -2px, rgba(0, 0, 0, 40%) 0 3px 7px -3px;
`

export const SuggestsHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 36px;
  padding-inline: 8px;

  font-size: 18px;
`

export const SuggestsGroup = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.white_50};
`

export const SuggestsGroupTitle = styled.div`
  padding: 8px;

  font-weight: 700;
`

export const SuggestItem = styled(motion.li).attrs(({ theme }) => suggestItemAttrs(theme))<{
  color?: string
}>`
  cursor: pointer;

  position: relative;

  display: flex;
  flex-direction: column;

  padding: 4px;

  border-top: 1px solid ${({ theme }) => theme.colors.white_05};

  ${({ color }) =>
    color &&
    css`
      :before {
        content: '';

        position: absolute;
        left: 0;

        width: 3px;
        height: 90%;

        background-color: ${color};
      }
    `}
`

export const SuggestItemLabel = styled.div`
  padding: 8px;
`

export const SuggestItemDescription = styled.p`
  padding-inline: 8px;

  font-size: 12px;
  color: ${({ theme }) => theme.colors.white_50};
`
