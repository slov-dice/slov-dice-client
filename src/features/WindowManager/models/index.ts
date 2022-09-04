export enum E_Window {
  characters = 'characters',
  inventory = 'inventory',
  market = 'market',
  battlefield = 'battlefield',
  player = 'player',
  textEditor = 'textEditor',
}
export interface I_Window {
  content: E_Window
}
