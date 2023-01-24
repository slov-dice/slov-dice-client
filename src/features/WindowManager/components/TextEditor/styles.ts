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
  height: 34px;
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
  background-color: ${({ theme }) => theme.colors.white_05};
`

export const TabFile = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;
  align-items: center;

  min-width: 90px;
  max-width: 90px;
  padding-inline: 4px;

  white-space: nowrap;

  background-color: ${({ theme }) => theme.colors.white_05};
`

export const Close = styled(Control)`
  position: absolute;
  right: 2px;
`

export const BottomSection = styled.div`
  display: flex;
  flex: 1;

  padding: 8px;

  textarea {
    width: 100%;

    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ theme }) => theme.colors.white_05};
  }
`
