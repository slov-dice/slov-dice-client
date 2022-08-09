export type T_SocketId = string
export type T_UserId = number
export type T_RoomId = string
export type T_AccessToken = string

export enum E_UserStatus {
  offline = 'offline',
  online = 'online',
  inRoom = 'inRoom',
}
export enum E_RoomType {
  public = 'PUBLIC',
  private = 'PRIVATE',
}
export enum E_RoomMessageType {
  custom = 'custom',
  command = 'command',
}
export enum E_AuthType {
  email = 'EMAIL',
  google = 'GOOGLE',
  discord = 'DISCORD',
  guest = 'GUEST',
}
export enum E_Locale {
  ru = 'RU',
  en = 'EN',
}

export interface I_Profile {
  id: T_UserId
  email: string
  nickname: string
  statuses: {
    isAuth: boolean
    inRoom: boolean
  }
}

export interface Lobby {
  users: I_LobbyUser[]
  chat: I_LobbyChat[]
  rooms: I_PreviewRoom[]
}

export interface I_LobbyUser {
  socketId: T_SocketId
  id: T_UserId
  nickname: string
  status: E_UserStatus
}

export interface I_LobbyChat {
  id: string
  authorId: T_UserId
  author: string
  text: string
}

export interface I_RoomUser {
  [id: T_UserId]: T_SocketId
}

export interface I_RoomChat {
  id: string
  authorId: T_UserId
  author: string
  text: string
  type: E_RoomMessageType
}

export interface I_PreviewRoom {
  id: T_RoomId
  authorId: T_UserId
  name: string
  size: number
  currentSize: number
  type: E_RoomType
  users: I_RoomUser[]
}

export interface I_FullRoom extends I_PreviewRoom {
  password: string
  messages: I_RoomChat[]
}
