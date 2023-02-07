import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Switch = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;

  font-size: 18px;
  font-weight: 300;
`

export const Option = styled.li<{ isSelected: boolean }>`
  cursor: pointer;
  user-select: none;

  position: relative;

  display: flex;
  flex: 1;
  align-items: center;

  width: 100%;
  min-height: 48px;
  padding-inline: 16px;

  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary_50 : theme.colors.white_05};
  border-radius: 5px;
`

export const Underline = styled(motion.div)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: -5px;

  width: 2px;
  height: 100%;

  background: ${({ theme }) => theme.colors.primary_50};
  border-radius: 4px;
`
