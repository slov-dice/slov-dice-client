import { DefaultTheme } from 'styled-components'

export const toolbarItemAttrs = (theme: DefaultTheme, $isDivider: boolean) => ({
  whileHover: $isDivider ? {} : { backgroundColor: theme.colors.white_30 },
  whileTap: $isDivider ? {} : { scale: 0.95 },
})
