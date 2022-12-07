import { About } from './extensions/About'
import { Intro } from './extensions/Intro'
import { Outro } from './extensions/Outro'
import { Players } from './extensions/Players'
import * as S from './styles'

export const Home = () => {
  return (
    <S.Page>
      <Intro />
      <About />
      <Players />
      <Outro />
    </S.Page>
  )
}
