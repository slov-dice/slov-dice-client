import { AnimatePresence } from 'framer-motion'

import { windowOverlayComponents } from './components'
import { E_WindowOverlay } from './models'
import * as S from './styles'

interface I_WindowOverlayManagerProps {
  overlays: E_WindowOverlay[]
}

export const WindowOverlayManager = ({ overlays }: I_WindowOverlayManagerProps) => {
  return (
    <AnimatePresence>
      {overlays.map((overlay) => {
        const WindowOverlayComponent = windowOverlayComponents[overlay]

        return (
          <S.WindowOverlay key={overlay}>
            <WindowOverlayComponent />
          </S.WindowOverlay>
        )
      })}
    </AnimatePresence>
  )
}
