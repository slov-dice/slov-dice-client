import { FC } from 'react'

import { BattlefieldContent } from './Battlefield'
import { CharactersContent } from './Characters'
import { InventoryContent } from './Inventory'
import { MarketContent } from './Market'
import { PlayerContent } from './Player'
import { TextEditorContent } from './TextEditor'

import { E_Window } from '../models'

export const WindowContentComponents: Record<E_Window, FC> = {
  [E_Window.battlefield]: BattlefieldContent,
  [E_Window.characters]: CharactersContent,
  [E_Window.inventory]: InventoryContent,
  [E_Window.market]: MarketContent,
  [E_Window.player]: PlayerContent,
  [E_Window.textEditor]: TextEditorContent,
}
