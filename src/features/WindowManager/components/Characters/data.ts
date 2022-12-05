import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'

export const initialStateSlice: I_WindowOverlay[] = [
  {
    isOpen: false,
    name: E_WindowOverlay.createCharacter,
  },
  {
    isOpen: false,
    name: E_WindowOverlay.updateCharacter,
  },
  {
    isOpen: false,
    name: E_WindowOverlay.pickCharacterAvatar,
  },
  {
    isOpen: false,
    name: E_WindowOverlay.updateCharacterEffect,
  },
]
