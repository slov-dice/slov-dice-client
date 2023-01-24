import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import MoreIcon from 'assets/icons/app/grip-dots.svg'

export const TextEditorContent = () => {
  return (
    <S.TextEditorWrapper>
      <S.TopSection>
        <S.TabMore>
          <MoreIcon />
        </S.TabMore>
        <S.TabFile>
          <span>Док 1</span>
          <S.Close>
            <CloseIcon />
          </S.Close>
        </S.TabFile>
        <S.TabFile>
          <span>Док 1</span>
          <S.Close>
            <CloseIcon />
          </S.Close>
        </S.TabFile>
        <S.TabFile>
          <span>Док 1</span>
          <S.Close>
            <CloseIcon />
          </S.Close>
        </S.TabFile>
        <S.TabFile>
          <span>Док 1</span>
          <S.Close>
            <CloseIcon />
          </S.Close>
        </S.TabFile>
        <S.TabFile>
          <span>Док 1</span>
          <S.Close>
            <CloseIcon />
          </S.Close>
        </S.TabFile>
        <S.TabFile>
          <span>Док 1</span>
          <S.Close>
            <CloseIcon />
          </S.Close>
        </S.TabFile>
      </S.TopSection>
      <S.BottomSection>
        <textarea />
      </S.BottomSection>
    </S.TextEditorWrapper>
  )
}
