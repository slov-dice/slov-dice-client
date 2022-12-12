import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  height: 48px;
  max-height: 100%;
  padding: 14px 20px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.white_10};
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 10%) 0 6px 12px -2px, rgba(0, 0, 0, 40%) 0 3px 7px -3px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.white_50};
  }
`
