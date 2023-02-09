import styled, { css } from 'styled-components'

export const MessageWrapper = styled.div<{ isAuthor: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isAuthor }) => (isAuthor ? 'flex-start' : 'flex-end')};
`

export const MessageAuthor = styled.div`
  font-weight: 600;
`
export const MessageText = styled.div<{
  isAuthor: boolean
  withAuthor: boolean
  isCommand: boolean
}>`
  position: relative;

  width: fit-content;
  margin-bottom: 8px;
  padding: 8px;

  background-color: ${({ theme, isAuthor }) =>
    isAuthor ? theme.colors.white_30 : theme.colors.white_05};
  border-radius: 8px;

  ${({ isAuthor, withAuthor }) =>
    isAuthor
      ? withAuthor &&
        css`
          border-top-left-radius: 0px;
        `
      : css`
          border-top-right-radius: 0px;
        `}
`

export const Text = styled.span<{ isCommand: boolean }>`
  ${({ isCommand, theme }) =>
    isCommand
      ? css`
          cursor: pointer;

          display: flex;
          justify-content: center;
          align-items: center;

          min-height: 24px;
          min-width: 24px;

          background-color: ${theme.colors.primary_50};
          border-radius: 8px;
        `
      : css``}
`
