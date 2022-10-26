import styled from 'styled-components'

export const Textarea = styled.textarea<{ fullWidth: boolean }>`
  resize: none;

  width: ${({ fullWidth }) => (fullWidth ? '100%' : '180px')};
  max-width: 100%;
  max-height: 100%;
  padding: 8px 18px;

  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.white_05};
  border: none;
  border-radius: 8px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 10%) 0 6px 12px -2px, rgba(0, 0, 0, 40%) 0 3px 7px -3px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.white_50};
  }
`
