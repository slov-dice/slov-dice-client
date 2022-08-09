import {
  T_AccessToken,
  I_FullRoom,
  I_LobbyChat,
  I_LobbyUser,
  I_PreviewRoom,
  I_RoomChat,
  T_RoomId,
  E_RoomType,
  T_UserId,
} from './app'

export enum SubscribeNamespace {
  // CHAT
  // Получение всех сообщений в лобби
  getAllMessagesLobby = 'get_all_messages_lobby',

  // Получение нового сообщения в лобби
  getMessageLobby = 'get_message_lobby',

  // USERS
  // Поучение всех пользователей в лобби
  getAllUsersLobby = 'get_all_users_lobby',

  // Получение пользователя
  getUserLobby = 'get_user_lobby',

  // Пользователь отключился
  userDisconnected = 'user_disconnected',

  // Комната обновилась в лобби
  roomUpdated = 'room_updated',

  // Обновление внутри комнаты
  inRoomUpdate = 'in_room_update',

  // Получение новой комнаты в лобби
  roomCreated = 'room_created',

  // Получение комнаты
  getFullRoom = 'get_full_room',

  // Получение сообщения в комнате
  getMessageRoom = 'get_message_room',

  // Пользователь переподключается к комнате
  userRejoinInRoom = 'user_rejoin_in_room',
}

export interface SubscriptionData {
  // CHAT
  [SubscribeNamespace.getAllMessagesLobby]: { chat: I_LobbyChat[] }
  [SubscribeNamespace.getMessageLobby]: { message: I_LobbyChat }

  // USERS
  [SubscribeNamespace.getAllUsersLobby]: { users: I_LobbyUser[] }
  [SubscribeNamespace.getUserLobby]: { user: I_LobbyUser }

  [SubscribeNamespace.userDisconnected]: { user: I_LobbyUser }
  [SubscribeNamespace.roomCreated]: {
    previewRoom: I_PreviewRoom
    user: I_LobbyUser
  }
  [SubscribeNamespace.roomUpdated]: {
    previewRoom: I_PreviewRoom
    user: I_LobbyUser
  }
  [SubscribeNamespace.inRoomUpdate]: {
    fullRoom: I_FullRoom
  }
  [SubscribeNamespace.getMessageRoom]: {
    message: I_RoomChat
  }
  [SubscribeNamespace.userRejoinInRoom]: {
    user: I_LobbyUser
  }
  [SubscribeNamespace.getFullRoom]: {
    fullRoom: I_FullRoom
  }
}

export enum EmitNamespace {
  // CHAT
  // Запрос на получение всех сообщений в лобби
  requestAllMessagesLobby = 'request_all_messages_lobby',

  // Отправка сообщения в лобби
  sendMessageLobby = 'send_message_lobby',

  // USERS
  // Запрос на получение всех пользователей в лобби
  requestAllUsersLobby = 'request_all_users_lobby',

  // Меняет статус пользователя на "онлайн"
  setUserOnline = 'set_user_online',

  // Выход юзера из профиля
  requestUserLogout = 'request_user_logout',

  // Отправка сообщения в комнате
  sendMessageRoom = 'send_message_room',

  // Создание комнаты в лобби
  createRoom = 'create_room',

  // Подключение к комнате в лобби
  joinRoom = 'join_room',

  // Переподключение к комнате
  rejoinRoom = 'rejoin_room',

  // Выход из комнаты в комнате
  leaveRoom = 'leave_room',
}

export interface EmitPayload {
  // CHAT
  [EmitNamespace.requestAllMessagesLobby]: { accessToken: T_AccessToken }
  [EmitNamespace.sendMessageLobby]: { text: string }

  // USERS
  [EmitNamespace.requestAllUsersLobby]: { accessToken: T_AccessToken }
  [EmitNamespace.setUserOnline]: {
    userId: T_UserId
    accessToken: T_AccessToken
  }
  [EmitNamespace.requestUserLogout]: { roomId: T_RoomId }

  [EmitNamespace.rejoinRoom]: { profileId: T_UserId; roomId: T_RoomId }
  [EmitNamespace.leaveRoom]: { roomId: T_RoomId }
  [EmitNamespace.joinRoom]: { roomId: T_RoomId; password: string }
  [EmitNamespace.createRoom]: {
    roomName: string
    roomSize: number
    roomPassword: string
    roomType: E_RoomType
  }
  [EmitNamespace.sendMessageRoom]: { roomId: T_RoomId; message: string }
}
