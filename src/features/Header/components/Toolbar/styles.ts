import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Toolbar = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-self: end;
`

interface I_ToolbarItemProps {
  $isDivider: boolean
}

export const ToolbarItem = styled(motion.div).attrs<I_ToolbarItemProps>(
  ({ theme, $isDivider }) => ({
    whileHover: $isDivider ? {} : { backgroundColor: theme.colors.white_30 },
    whileTap: $isDivider ? {} : { scale: 0.95 },
  }),
)<I_ToolbarItemProps>`
  user-select: none;

  display: flex;
  justify-content: center;

  height: 40px;

  border-radius: 10%;

  ${({ $isDivider }) =>
    $isDivider
      ? css`
          width: 12px;
          padding: 4px;
          cursor: default;
        `
      : css`
          width: 40px;
          padding: 6px;
          cursor: pointer;
        `}

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`
