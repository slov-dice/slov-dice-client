import * as S from './styles'

import { useStoreSelector } from 'hooks/useStoreSelector'

export const ChatPanel = () => {
  const profileId = useStoreSelector((state) => state.profile.id)

  return (
    <S.ChatPanel>
      <span>Chat</span>
    </S.ChatPanel>
  )
}
