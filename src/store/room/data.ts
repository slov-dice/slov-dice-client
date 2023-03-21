import { E_RoomType, I_FullRoom } from 'models/shared/app'

export const initialState: I_FullRoom = {
  id: '',
  name: '',
  password: '',
  authorId: 0,
  currentSize: 0,
  size: 0,
  type: E_RoomType.public,
  users: [],
  messages: [],
  createdAt: null,
  updatedAt: null,
  game: {
    characters: {
      window: {
        characters: [],
      },
      settings: {
        bars: [],
        effects: [],
        specials: [],
      },
    },
    battlefield: {
      window: {
        masterDummies: [],
        masterField: [],
        playersDummies: [],
        playersField: [],
      },
    },
    textEditor: {
      window: {
        docs: [],
      },
    },
  },
}
