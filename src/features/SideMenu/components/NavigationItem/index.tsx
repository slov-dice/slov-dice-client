import * as S from './styles'

import { t } from 'languages'
import { E_Icon, getIcon } from 'utils/helpers/icons'

interface NavigationItemProps {
  onClick: () => void
  icon: E_Icon
  name: string
}

export const NavigationItem = ({ onClick, icon, name }: NavigationItemProps) => (
  <S.NavigationItem onClick={onClick}>
    <S.NavigationItemIcon>{getIcon(icon)}</S.NavigationItemIcon>
    <S.NavigationItemText>{t(name)}</S.NavigationItemText>
  </S.NavigationItem>
)

export const NavigationDivider = () => <S.NavigationDivider />
