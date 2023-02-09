import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

import { T_ConfirmLeaveRoomPayload, T_EnterPasswordRoomPayload } from './models/context'

import { E_RoomType } from 'models/shared/app'

interface I_Store {
  enterPasswordRoomPayload: T_EnterPasswordRoomPayload
  setEnterPasswordRoomPayload: Dispatch<SetStateAction<T_EnterPasswordRoomPayload>>

  confirmLeaveRoomPayload: T_ConfirmLeaveRoomPayload
  setConfirmLeaveRoomPayload: Dispatch<SetStateAction<T_ConfirmLeaveRoomPayload>>
}

const store: I_Store = {
  enterPasswordRoomPayload: { roomId: '' },
  setEnterPasswordRoomPayload: () => null,

  confirmLeaveRoomPayload: { roomId: '', roomType: E_RoomType.public },
  setConfirmLeaveRoomPayload: () => null,
}

export const modalManagerContext = createContext<I_Store>(store)
const { Provider } = modalManagerContext

interface I_ModalManagerProviderProps {
  children: ReactNode
}

export const ModalManagerProvider = ({ children }: I_ModalManagerProviderProps) => {
  const [enterPasswordRoomPayload, setEnterPasswordRoomPayload] =
    useState<T_EnterPasswordRoomPayload>({ roomId: '' })

  const [confirmLeaveRoomPayload, setConfirmLeaveRoomPayload] = useState<T_ConfirmLeaveRoomPayload>(
    { roomId: '', roomType: E_RoomType.public },
  )

  const states = {
    enterPasswordRoomPayload,
    confirmLeaveRoomPayload,
  }

  const actions = {
    setEnterPasswordRoomPayload,
    setConfirmLeaveRoomPayload,
  }

  return <Provider value={{ ...states, ...actions }}>{children}</Provider>
}
