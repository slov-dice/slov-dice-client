import { ReactNode } from 'react'

import BackpackIcon from 'assets/icons/backpack.svg'
import ChatIcon from 'assets/icons/chat.svg'
import CirclePlayIcon from 'assets/icons/circle-play.svg'
import CompressIcon from 'assets/icons/compress.svg'
import DividerIcon from 'assets/icons/divider.svg'
import EnterRoomIcon from 'assets/icons/enter-room.svg'
import ExpandIcon from 'assets/icons/expand.svg'
import FileLinesIcon from 'assets/icons/file-lines.svg'
import FileUserIcon from 'assets/icons/file-user.svg'
import FortIcon from 'assets/icons/fort.svg'
import JoinIcon from 'assets/icons/gamepad.svg'
import SettingsIcon from 'assets/icons/gear.svg'
import LanguageIcon from 'assets/icons/language.svg'
import LeaveRoomIcon from 'assets/icons/leave-room.svg'
import LoginIcon from 'assets/icons/login.svg'
import LogoutIcon from 'assets/icons/logout.svg'
import CreateIcon from 'assets/icons/plus.svg'
import SaveIcon from 'assets/icons/save.svg'
import StoreIcon from 'assets/icons/store.svg'
import SwordsIcon from 'assets/icons/swords.svg'
import UploadIcon from 'assets/icons/upload.svg'
import UsersIcon from 'assets/icons/users.svg'

export enum E_Icon {
  backpack = 'backpack',
  chat = 'chat',
  circlePlay = 'circlePlay',
  compress = 'compress',
  divider = 'divider',
  enterRoom = 'enterRoom',
  expand = 'expand',
  fileLines = 'fileLines',
  fileUser = 'fileUser',
  fort = 'fort',
  join = 'join',
  settings = 'settings',
  language = 'language',
  leaveRoom = 'leaveRoom',
  login = 'login',
  logout = 'logout',
  create = 'create',
  save = 'save',
  store = 'store',
  swords = 'swords',
  upload = 'upload',
  users = 'users',
}

export const getIcon = (icon: E_Icon): ReactNode => {
  switch (icon) {
    case E_Icon.backpack:
      return <BackpackIcon />

    case E_Icon.chat:
      return <ChatIcon />

    case E_Icon.circlePlay:
      return <CirclePlayIcon />

    case E_Icon.compress:
      return <CompressIcon />

    case E_Icon.divider:
      return <DividerIcon />

    case E_Icon.enterRoom:
      return <EnterRoomIcon />

    case E_Icon.expand:
      return <ExpandIcon />

    case E_Icon.fileLines:
      return <FileLinesIcon />

    case E_Icon.fileUser:
      return <FileUserIcon />

    case E_Icon.fort:
      return <FortIcon />

    case E_Icon.join:
      return <JoinIcon />

    case E_Icon.settings:
      return <SettingsIcon />

    case E_Icon.language:
      return <LanguageIcon />

    case E_Icon.leaveRoom:
      return <LeaveRoomIcon />

    case E_Icon.login:
      return <LoginIcon />

    case E_Icon.logout:
      return <LogoutIcon />

    case E_Icon.create:
      return <CreateIcon />

    case E_Icon.save:
      return <SaveIcon />

    case E_Icon.store:
      return <StoreIcon />

    case E_Icon.swords:
      return <SwordsIcon />

    case E_Icon.upload:
      return <UploadIcon />

    case E_Icon.users:
      return <UsersIcon />
  }
}
