import { About } from './components/About'
import { Intro } from './components/Intro'
import * as S from './styles'

export const Home = () => {
  return (
    <S.Home>
      <Intro />
      <About />
    </S.Home>
  )
}
