import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'

export const initialOverlayStateSlice: I_WindowOverlay[] = [
  {
    name: E_WindowOverlay.createCharacter,
  },
  {
    name: E_WindowOverlay.updateCharacter,
  },
  {
    name: E_WindowOverlay.pickCharacterAvatar,
  },
  {
    name: E_WindowOverlay.updateCharacterEffect,
  },
  {
    name: E_WindowOverlay.actionsEditor,
  },
]
