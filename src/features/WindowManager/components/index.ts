import { FC } from 'react'

import { BattlefieldContent } from './Battlefield'
import { CharactersContent } from './Characters'
import { InventoryContent } from './Inventory'
import { MarketContent } from './Market'
import { PlayerContent } from './Player'
import { TextEditorContent } from './TextEditor'

import { E_Window, I_WindowHead } from '../models'

import { E_Icon } from 'utils/helpers/icons'

export const windowHead: Record<E_Window, I_WindowHead> = {
  [E_Window.battlefield]: { title: 'sideMenu.window.battlefield', icon: E_Icon.swords },
  [E_Window.characters]: { title: 'sideMenu.window.characters', icon: E_Icon.fileUser },
  [E_Window.inventory]: { title: 'sideMenu.window.inventory', icon: E_Icon.backpack },
  [E_Window.market]: { title: 'sideMenu.window.market', icon: E_Icon.store },
  [E_Window.player]: { title: 'sideMenu.window.player', icon: E_Icon.circlePlay },
  [E_Window.textEditor]: { title: 'sideMenu.window.textEditor', icon: E_Icon.fileLines },
}

export const windowContentComponents: Record<E_Window, FC> = {
  [E_Window.battlefield]: BattlefieldContent,
  [E_Window.characters]: CharactersContent,
  [E_Window.inventory]: InventoryContent,
  [E_Window.market]: MarketContent,
  [E_Window.player]: PlayerContent,
  [E_Window.textEditor]: TextEditorContent,
}
