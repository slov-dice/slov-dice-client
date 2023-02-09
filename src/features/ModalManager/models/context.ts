import { E_RoomType, T_RoomId } from 'models/shared/app'

export type T_EnterPasswordRoomPayload = {
  roomId: T_RoomId
}

export type T_ConfirmLeaveRoomPayload = {
  roomId: T_RoomId
  roomType: E_RoomType
}
