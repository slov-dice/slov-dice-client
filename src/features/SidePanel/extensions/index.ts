import { FC } from 'react'

import { ChatPanel } from './ChatPanel'
import { UsersPanel } from './UsersPanel'

import { E_Panels } from '../models'

export const Panel: Record<E_Panels, FC> = {
  [E_Panels.chat]: ChatPanel,
  [E_Panels.users]: UsersPanel,
}
