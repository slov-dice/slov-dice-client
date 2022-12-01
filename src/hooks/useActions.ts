import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { gameCharactersActions } from 'features/WindowManager/components/Characters/slice'
import { windowManagerActions } from 'features/WindowManager/slice'
import { roomActions } from 'store/room'

const actions = {
  ...windowManagerActions,
  ...roomActions,
  ...gameCharactersActions,
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}
