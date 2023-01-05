import { createContext, ReactNode } from 'react'

import { E_Window } from 'features/WindowManager/models'

interface I_Store {
  location: E_Window | ''
}

const store: I_Store = {
  location: '',
}

export const windowOverlayManagerContext = createContext<I_Store>(store)
const { Provider } = windowOverlayManagerContext

interface I_WindowOverlayManagerProviderProps {
  location: E_Window
  children: ReactNode
}

export const WindowOverlayManagerProvider = ({
  location,
  children,
}: I_WindowOverlayManagerProviderProps) => {
  const states = {
    location,
  }

  return <Provider value={{ ...states }}>{children}</Provider>
}
