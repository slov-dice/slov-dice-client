import { AnimatePresence } from 'framer-motion'
import { MutableRefObject } from 'react'

import { windowContentComponents, windowHead } from './components'
import { Window } from './extensions/Window'

import { useStoreSelector } from 'hooks/useStoreSelector'

interface I_WindowManagerProps {
  dragConstraintsRef: MutableRefObject<HTMLDivElement | null>
}

export const WindowManager = ({ dragConstraintsRef }: I_WindowManagerProps) => {
  const windows = useStoreSelector((store) => store.windowManager.windows)
  useStoreSelector((store) => store.app.language)
  return (
    <AnimatePresence>
      {Boolean(windows.length) &&
        windows.map((window) => {
          const windowHeadProps = windowHead[window.content]
          const WindowContentComponent = windowContentComponents[window.content]

          return (
            <Window
              key={window.content}
              header={windowHeadProps}
              content={window.content}
              focused={window.focused}
              dragConstraintsRef={dragConstraintsRef}
            >
              <WindowContentComponent />
            </Window>
          )
        })}
    </AnimatePresence>
  )
}
