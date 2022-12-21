import { T_BaseCharacterBar } from 'models/shared/game/character'

export type T_FormCreateDummy = {
  name: string
  description: string
  bars: { id: string; max: number; include: boolean }[]
}

export const getFormCreateDummy = (settingsBars: T_BaseCharacterBar[]): T_FormCreateDummy => ({
  name: 'Имя/Name',
  description: 'Описание/Description',
  bars: settingsBars.map((bar) => ({ id: bar.id, max: 100, include: true })),
})
