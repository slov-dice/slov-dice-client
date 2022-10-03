import * as S from './styles'

import { t } from 'languages'
import { E_AppIcon, getAppIcon } from 'utils/helpers/icons/app'

interface NavigationItemProps {
  onClick: () => void
  icon: E_AppIcon
  name: string
}

export const NavigationItem = ({ onClick, icon, name }: NavigationItemProps) => (
  <S.NavigationItem onClick={onClick}>
    <S.NavigationItemIcon>{getAppIcon(icon)}</S.NavigationItemIcon>
    <S.NavigationItemText>{t(name)}</S.NavigationItemText>
  </S.NavigationItem>
)

export const NavigationDivider = () => <S.NavigationDivider />
