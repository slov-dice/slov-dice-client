import { keyframes } from 'styled-components'

import { theme } from 'styles/theme'

export const neon = keyframes` 
  from {
    text-shadow:
      0 0 10px ${theme.colors.primary},
      0 0 40px ${theme.colors.primary},
      0 0 100px ${theme.colors.primary};
  }

  to {
    text-shadow:
      0 0 5px ${theme.colors.primary},  
      0 0 20px ${theme.colors.primary},
      0 0 60px ${theme.colors.primary};
  }
`
