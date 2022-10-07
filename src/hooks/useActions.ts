import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { gameCharactersActions } from 'features/WindowManager/components/Characters/slice'
import { windowManagerActions } from 'features/WindowManager/slice'

const actions = {
  ...gameCharactersActions,
  ...windowManagerActions,
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}
