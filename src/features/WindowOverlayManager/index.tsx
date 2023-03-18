import { AnimatePresence } from 'framer-motion'

import { windowOverlayComponents } from './components'
import { I_WindowOverlay } from './models'
import * as S from './styles'

interface I_WindowOverlayManagerProps {
  overlays: I_WindowOverlay[]
}

export const WindowOverlayManager = ({ overlays }: I_WindowOverlayManagerProps) => {
  return (
    <AnimatePresence>
      {overlays.map((overlay) => {
        const WindowOverlayComponent = windowOverlayComponents[overlay.name]
        return (
          <S.WindowOverlay key={overlay.name}>
            <WindowOverlayComponent />
          </S.WindowOverlay>
        )
      })}
    </AnimatePresence>
  )
}
