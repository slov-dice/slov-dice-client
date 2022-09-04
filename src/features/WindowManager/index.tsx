import { MutableRefObject } from 'react'

import { WindowContentComponents } from './components'
import { Window } from './extensions/Window'

import { useStoreSelector } from 'hooks/useStoreSelector'

interface I_WindowManagerProps {
  dragConstraintsRef: MutableRefObject<HTMLDivElement | null>
}

export const WindowManager = ({ dragConstraintsRef }: I_WindowManagerProps) => {
  const windows = useStoreSelector((state) => state.windowManager.windows)

  if (!windows.length) return null

  return (
    <>
      {windows.map((window) => {
        const WindowContent = WindowContentComponents[window.content]

        return (
          <Window key={window.content} dragConstraintsRef={dragConstraintsRef}>
            <WindowContent />
          </Window>
        )
      })}
    </>
  )
}
