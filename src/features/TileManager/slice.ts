import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_Window } from 'features/WindowManager/models'

interface I_InitialState {
  tiles: E_Window[]
}

const initialState: I_InitialState = {
  tiles: [E_Window.tutorial],
}

export const tileManagerSlice = createSlice({
  name: 'tileManager',
  initialState,
  reducers: {
    openTile: (state, action: PayloadAction<E_Window>) => {
      // Если тайл открыт, то перемещаем его на первую позицию
      const index = state.tiles.indexOf(action.payload)
      if (index !== -1) {
        const item = state.tiles.splice(index, 1)[0]
        state.tiles.unshift(item)
      }
      // Иначе добавляем его в начало
      else {
        state.tiles.unshift(action.payload)
      }
    },

    closeTile: (state, action: PayloadAction<E_Window>) => {
      const index = state.tiles.indexOf(action.payload)
      if (index !== -1) {
        state.tiles.splice(index, 1)[0]
      }
    },
  },
})

export const tileManagerActions = tileManagerSlice.actions
