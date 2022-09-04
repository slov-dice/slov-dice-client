import { WindowContentComponents } from './components'
import { Window } from './extensions/Window'

import { useStoreSelector } from 'hooks/useStoreSelector'

export const WindowManager = ({ dragConstraints }: any) => {
  const windows = useStoreSelector((state) => state.windowManager.windows)

  if (!windows.length) return null

  return (
    <>
      {windows.map((window) => {
        const WindowContent = WindowContentComponents[window.content]

        return (
          <Window key={window.content} dragConstraints={dragConstraints}>
            <WindowContent />
          </Window>
        )
      })}
    </>
  )
}
