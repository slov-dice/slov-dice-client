import styled from 'styled-components'

import { BaseModal, BaseModalClose, BaseModalContent } from '../styles'

export const Modal = styled(BaseModal)``

export const ModalClose = styled(BaseModalClose)``

export const ModalContent = styled(BaseModalContent)``

export const VersionWrapper = styled.div`
  position: relative;

  color: ${({ theme }) => theme.colors.white};
`

export const ChangeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 8px;
  margin-left: 8px;

  color: ${({ theme }) => theme.colors.white_80};

  ::after {
    content: '';

    position: absolute;
    bottom: 0;
    left: -8px;

    width: 1px;
    height: 90%;

    background-color: ${({ theme }) => theme.colors.white_30};
  }
`
