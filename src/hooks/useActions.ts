import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { chatPanelActions } from 'features/SidePanel/components/ChatPanel/slice'
import { gameCharactersActions } from 'features/WindowManager/components/Characters/slice'
import { windowManagerActions } from 'features/WindowManager/slice'
import { roomActions } from 'store/room'

const actions = {
  ...windowManagerActions,
  ...roomActions,
  ...gameCharactersActions,
  ...chatPanelActions,
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}
