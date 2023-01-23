import * as S from './styles'

import { useStoreSelector } from 'hooks/useStoreSelector'

export const RoomStateTab = () => {
  const room = useStoreSelector((store) => store.room)

  return (
    <S.TabPanel>
      <pre>{JSON.stringify(room, null, 2)}</pre>
    </S.TabPanel>
  )
}
