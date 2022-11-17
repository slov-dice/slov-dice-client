import styled from 'styled-components'

export const Input = styled.input<{ fullWidth: boolean }>`
  cursor: pointer;

  width: ${({ fullWidth }) => (fullWidth ? '100%' : '180px')};

  background-color: ${({ theme }) => theme.colors.white_05};
  border: none;
`
