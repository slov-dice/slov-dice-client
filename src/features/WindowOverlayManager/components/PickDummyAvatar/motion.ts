import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export enum E_CharacterAvatarVariants {
  selected = 'selected',
  unselected = 'unselected',
}

export const avatarWrapperAttrs = (
  theme: DefaultTheme,
  isSelected: boolean,
): HTMLMotionProps<'div'> => ({
  whileHover: { opacity: isSelected ? 1 : 0.75 },
  whileTap: { scale: isSelected ? 1 : 0.95 },
  animate: isSelected ? E_CharacterAvatarVariants.selected : E_CharacterAvatarVariants.unselected,
  variants: {
    [E_CharacterAvatarVariants.selected]: {
      borderColor: theme.colors.primary,
    },
    [E_CharacterAvatarVariants.unselected]: {
      borderColor: theme.colors.white_50,
    },
  },
})
