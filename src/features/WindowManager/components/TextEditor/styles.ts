import styled from 'styled-components'

import { Control } from 'styles/components'

export const TextEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`

export const TopSection = styled.div`
  overflow-x: auto;
  display: flex;
  gap: 4px;

  max-width: 100%;
  min-height: 34px;
  padding: 2px;

  border-bottom: 1px dashed ${({ theme }) => theme.colors.primary};

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
`

export const TabMore = styled(Control)`
  min-width: 28px;

  background-color: ${({ theme }) => theme.colors.white_05};
`

export const TabFile = styled.div<{ isActive: boolean }>`
  cursor: pointer;

  position: relative;

  overflow: hidden;
  display: flex;
  align-items: center;

  min-width: 20%;
  max-width: 20%;
  padding-inline: 4px;

  white-space: nowrap;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white_50 : theme.colors.white_05};

  span {
    overflow: hidden;

    width: 98%;
  }
`

export const Close = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  user-select: none;

  position: absolute;
  right: 0;

  display: flex;
  justify-content: center;

  width: 28px;
  height: 28px;
  padding: 0 4px;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0%) 0%,
    ${({ theme, isActive }) => (isActive ? '#8B8B8B' : '#2B2B2B')} 20%
  );
  border-radius: 15%;

  fill: ${({ theme }) => theme.colors.white};
`

export const BottomSection = styled.div`
  display: flex;
  flex: 1;

  max-height: 100%;
  padding: 8px;
`
