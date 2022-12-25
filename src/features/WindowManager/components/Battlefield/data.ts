import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'

export const initialOverlayStateSlice: I_WindowOverlay[] = [
  {
    isOpen: false,
    name: E_WindowOverlay.battlefieldEditor,
  },
  {
    isOpen: false,
    name: E_WindowOverlay.createDummy,
  },
  {
    isOpen: false,
    name: E_WindowOverlay.actionsEditor,
  },
  {
    isOpen: false,
    name: E_WindowOverlay.pickDummyAvatar,
  },
]
