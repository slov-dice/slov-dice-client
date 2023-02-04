import { E_UserStatus, I_LobbyUser, T_UserId } from 'models/shared/app'

export const sortUsers = (users: I_LobbyUser[], profileId: T_UserId) => {
  return [...users].sort((a, b) => {
    if (
      (b.status === E_UserStatus.online && a.status === E_UserStatus.offline) ||
      (a.status === E_UserStatus.inRoom && b.status === E_UserStatus.online)
    ) {
      return 1
    }
    if (
      (b.status === E_UserStatus.offline && a.status === E_UserStatus.online) ||
      a.id === profileId ||
      (a.status === E_UserStatus.inRoom && b.status === E_UserStatus.offline)
    ) {
      return -1
    }
    return 0
  })
}
