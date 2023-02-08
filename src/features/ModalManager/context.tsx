import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

import { T_EnterPasswordRoomPayload } from './models'

interface I_Store {
  enterPasswordRoomPayload: T_EnterPasswordRoomPayload
  setEnterPasswordRoomPayload: Dispatch<SetStateAction<T_EnterPasswordRoomPayload>>
}

const store: I_Store = {
  enterPasswordRoomPayload: { roomId: '' },
  setEnterPasswordRoomPayload: () => null,
}

export const modalManagerContext = createContext<I_Store>(store)
const { Provider } = modalManagerContext

interface I_ModalManagerProviderProps {
  children: ReactNode
}

export const ModalManagerProvider = ({ children }: I_ModalManagerProviderProps) => {
  const [enterPasswordRoomPayload, setEnterPasswordRoomPayload] =
    useState<T_EnterPasswordRoomPayload>({ roomId: '' })

  const states = {
    enterPasswordRoomPayload,
  }

  const actions = {
    setEnterPasswordRoomPayload,
  }

  return <Provider value={{ ...states, ...actions }}>{children}</Provider>
}
