import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'

export const initialOverlayStateSlice: I_WindowOverlay[] = [
  {
    isOpen: false,
    name: E_WindowOverlay.battlefieldActionsEditor,
  },
  {
    isOpen: false,
    name: E_WindowOverlay.battlefieldEditor,
  },
]
