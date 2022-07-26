import styled from 'styled-components'

export const Divider = styled.hr`
  flex-shrink: 0;

  margin: 0;

  border-color: #444;
  border-style: solid;
  border-width: 0;
  border-bottom-width: thin;
`

export const Brick = styled.div<{ h?: number }>`
  height: ${({ h = 32 }) => h + 'px'};
`
