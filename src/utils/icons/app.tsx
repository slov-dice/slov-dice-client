import { ReactNode } from 'react'

import BackpackIcon from 'assets/icons/app/backpack.svg'
import ChatIcon from 'assets/icons/app/chat.svg'
import CirclePlayIcon from 'assets/icons/app/circle-play.svg'
import CompressIcon from 'assets/icons/app/compress.svg'
import DividerIcon from 'assets/icons/app/divider.svg'
import EnterRoomIcon from 'assets/icons/app/enter-room.svg'
import ExpandIcon from 'assets/icons/app/expand.svg'
import FileLinesIcon from 'assets/icons/app/file-lines.svg'
import FileUserIcon from 'assets/icons/app/file-user.svg'
import FortIcon from 'assets/icons/app/fort.svg'
import JoinIcon from 'assets/icons/app/gamepad.svg'
import SettingsIcon from 'assets/icons/app/gear.svg'
import InfoIcon from 'assets/icons/app/info.svg'
import LanguageIcon from 'assets/icons/app/language.svg'
import LeaveRoomIcon from 'assets/icons/app/leave-room.svg'
import LoginIcon from 'assets/icons/app/login.svg'
import LogoutIcon from 'assets/icons/app/logout.svg'
import CreateIcon from 'assets/icons/app/plus.svg'
import SaveIcon from 'assets/icons/app/save.svg'
import StoreIcon from 'assets/icons/app/store.svg'
import SwordsIcon from 'assets/icons/app/swords.svg'
import UploadIcon from 'assets/icons/app/upload.svg'
import UsersIcon from 'assets/icons/app/users.svg'

export enum E_AppIcon {
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
  info = 'info',
}

export const getAppIcon = (icon: E_AppIcon): ReactNode => {
  switch (icon) {
    case E_AppIcon.backpack:
      return <BackpackIcon />

    case E_AppIcon.chat:
      return <ChatIcon />

    case E_AppIcon.circlePlay:
      return <CirclePlayIcon />

    case E_AppIcon.compress:
      return <CompressIcon />

    case E_AppIcon.divider:
      return <DividerIcon />

    case E_AppIcon.enterRoom:
      return <EnterRoomIcon />

    case E_AppIcon.expand:
      return <ExpandIcon />

    case E_AppIcon.fileLines:
      return <FileLinesIcon />

    case E_AppIcon.fileUser:
      return <FileUserIcon />

    case E_AppIcon.fort:
      return <FortIcon />

    case E_AppIcon.join:
      return <JoinIcon />

    case E_AppIcon.settings:
      return <SettingsIcon />

    case E_AppIcon.language:
      return <LanguageIcon />

    case E_AppIcon.leaveRoom:
      return <LeaveRoomIcon />

    case E_AppIcon.login:
      return <LoginIcon />

    case E_AppIcon.logout:
      return <LogoutIcon />

    case E_AppIcon.create:
      return <CreateIcon />

    case E_AppIcon.save:
      return <SaveIcon />

    case E_AppIcon.store:
      return <StoreIcon />

    case E_AppIcon.swords:
      return <SwordsIcon />

    case E_AppIcon.upload:
      return <UploadIcon />

    case E_AppIcon.users:
      return <UsersIcon />

    case E_AppIcon.info:
      return <InfoIcon />
  }
}
