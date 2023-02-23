import { About } from './extensions/About'
import { Intro } from './extensions/Intro'
import { Outro } from './extensions/Outro'
import { Players } from './extensions/Players'
import * as S from './styles'

const Home = () => {
  return (
    <S.Page>
      <Intro />
      <About />
      <Players />
      <Outro />
    </S.Page>
  )
}

export default Home
