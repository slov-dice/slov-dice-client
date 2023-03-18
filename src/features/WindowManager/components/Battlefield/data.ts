import { T_CharacterAction } from 'models/shared/game/character'

export const initialActiveCardActionSlice: T_CharacterAction = {
  id: '',
  title: '',
  description: '',
  target: { barId: '', value: '' },
}
