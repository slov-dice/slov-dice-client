import * as S from './styles'

export const About = () => {
  return (
    <S.About>
      <S.Title>About</S.Title>
      <S.AboutInner>
        <S.InfoBox>
          <S.InfoTitle>About</S.InfoTitle>
          <S.InfoSubTitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ex vel quia quo
            deleniti distinctio fuga, iste molestiae possimus? At expedita sunt voluptatem pariatur
            a, explicabo nihil earum reiciendis tempora incidunt et vero ipsum esse quasi
            recusandae. Aut aliquam dolore explicabo architecto facere illum laudantium quaerat non
            omnis? Laborum, molestias.
          </S.InfoSubTitle>
          <div>
            <S.InfoMoreButton>Watch More</S.InfoMoreButton>
          </div>
        </S.InfoBox>
        <S.MediaBox>
          <S.Media />
          <S.Media />
          <S.Media />
        </S.MediaBox>
      </S.AboutInner>
    </S.About>
  )
}
