import styled from 'styled-components'

export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 14px 20px;
  width: 100%;
  height: 54px;
  max-width: 100%;
  max-height: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0 6px 12px -2px, rgba(0, 0, 0, 0.4) 0 3px 7px -3px;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.white_05};

  ::placeholder {
    color: ${({ theme }) => theme.colors.white_50};
  }
`
