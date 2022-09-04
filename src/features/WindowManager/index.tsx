import { WindowContentComponents } from './components'
import { Window } from './extensions/Window'

import { useStoreSelector } from 'hooks/useStoreSelector'

export const WindowManager = () => {
  const windows = useStoreSelector((state) => state.windowManager.windows)

  if (!windows.length) return null

  return (
    <>
      {windows.map((window) => {
        const WindowContent = WindowContentComponents[window.content]

        return (
          <Window key={window.content}>
            <WindowContent />
          </Window>
        )
      })}
    </>
  )
}
