import { ReactNode } from 'react'

import ChatIcon from 'assets/icons/chat.svg'
import CompressIcon from 'assets/icons/compress.svg'
import DividerIcon from 'assets/icons/divider.svg'
import ExpandIcon from 'assets/icons/expand.svg'
import JoinIcon from 'assets/icons/gamepad.svg'
import SettingsIcon from 'assets/icons/gear.svg'
import LanguageIcon from 'assets/icons/language.svg'
import LoginIcon from 'assets/icons/login.svg'
import LogoutIcon from 'assets/icons/logout.svg'
import CreateIcon from 'assets/icons/plus.svg'
import UsersIcon from 'assets/icons/users.svg'

export enum E_Icon {
  chat = 'chat',
  compress = 'compress',
  divider = 'divider',
  expand = 'expand',
  join = 'join',
  settings = 'settings',
  language = 'language',
  login = 'login',
  logout = 'logout',
  create = 'create',
  users = 'users',
}

export const getIcon = (icon: E_Icon): ReactNode => {
  switch (icon) {
    case E_Icon.chat:
      return <ChatIcon />

    case E_Icon.compress:
      return <CompressIcon />

    case E_Icon.divider:
      return <DividerIcon />

    case E_Icon.expand:
      return <ExpandIcon />

    case E_Icon.join:
      return <JoinIcon />

    case E_Icon.settings:
      return <SettingsIcon />

    case E_Icon.language:
      return <LanguageIcon />

    case E_Icon.login:
      return <LoginIcon />

    case E_Icon.logout:
      return <LogoutIcon />

    case E_Icon.create:
      return <CreateIcon />

    case E_Icon.users:
      return <UsersIcon />
  }
}
