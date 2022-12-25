import styled from 'styled-components'

export const EditAvatar = styled.span`
  cursor: pointer;

  position: absolute;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  opacity: 0;
  background-color: ${({ theme }) => theme.colors.black_30};

  transition: opacity 0.5s ease;
`

export const AvatarWrapper = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 154px;
  height: 154px;

  border: 2px solid ${({ theme }) => theme.colors.white_50};
  border-radius: 50%;

  &:hover ${EditAvatar} {
    opacity: 1;
  }
`

export const AvatarImage = styled.img`
  overflow: hidden;

  width: 100%;
  height: 100%;

  object-fit: cover;
`

export const EditAvatarIcon = styled.span`
  width: 24px;
  height: 24px;

  fill: ${({ theme }) => theme.colors.white};

  svg: {
    width: 100%;
    height: 100%;
  }
`
