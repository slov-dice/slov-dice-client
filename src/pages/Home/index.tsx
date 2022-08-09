import { About } from './extensions/About'
import { GameMaster } from './extensions/GameMaster'
import { Intro } from './extensions/Intro'
import * as S from './styles'

export const Home = () => {
  return (
    <S.Home>
      <Intro />
      <About />
      <GameMaster />
    </S.Home>
  )
}
