import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import { T_CharacterAction } from 'models/shared/game/character'

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

export const initialActiveCardActionSlice: T_CharacterAction = {
  id: '',
  title: '',
  description: '',
  target: { barId: '', value: '' },
}
