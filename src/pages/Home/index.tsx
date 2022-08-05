import { About } from './components/About'
import { GameMaster } from './components/GameMaster'
import { Intro } from './components/Intro'
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
