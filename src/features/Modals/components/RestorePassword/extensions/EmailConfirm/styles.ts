import styled from 'styled-components'

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.white_50};
`

export const WrapperEmailField = styled.div`
  display: grid;
  grid: 1fr/ 3fr 1fr;
`

export const WrapperCodeField = styled.div`
  width: 90px;
`

export const WrapperActions = styled.div`
  display: flex;
  gap: 16px;

  margin-left: auto;
`
