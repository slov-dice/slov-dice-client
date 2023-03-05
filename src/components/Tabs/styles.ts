import { motion } from 'framer-motion'
import styled from 'styled-components'

export const TabBar = styled.ul`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  gap: 4px;

  width: 100%;
  max-height: 48px;
  margin-bottom: 16px;
  padding-bottom: 8px;

  font-size: 18px;
  font-weight: 300;

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: #1e1939;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
`

export const Option = styled.li<{ isSelected: boolean }>`
  cursor: pointer;
  user-select: none;

  position: relative;

  display: flex;
  flex: 1;
  align-items: center;

  width: fit-content;
  height: 38px;
  padding: 8px;

  white-space: nowrap;

  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary_50 : theme.colors.white_05};
  border-radius: 5px;
`

export const Underline = styled(motion.div)`
  position: absolute;
  right: 0;
  bottom: -5px;

  width: 100%;
  height: 2px;

  background: ${({ theme }) => theme.colors.primary_50};
  border-radius: 4px;
`
