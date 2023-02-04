import styled, { css, DefaultTheme } from 'styled-components'

import { E_UserStatus } from 'models/shared/app'
import { T_StyledVariants } from 'models/styled'

export const UserWrapper = styled.div`
  position: relative;

  margin-bottom: 8px;
  padding: 8px;

  background-color: ${({ theme }) => theme.colors.white_05};
  border-radius: 8px;
`

export const UserStatus = styled.span<{ status: E_UserStatus }>`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 16px;
  height: 100%;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  ${({ theme, status }) => getStatusStyles(theme)[status]}
`

const getStatusStyles = (theme: DefaultTheme): T_StyledVariants<E_UserStatus> => ({
  online: css`
    background-color: #07bc0c;
  `,
  inRoom: css`
    background-color: #3498db;
  `,
  offline: css`
    background-color: ${theme.colors.white_30};
  `,
})
