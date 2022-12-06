import * as S from './styles'

import PlusIcon from 'assets/icons/app/plus.svg'
import { t } from 'languages'

interface I_AddCharacterCardProps {
  onClick: () => void
}

export const AddCharacterCard = ({ onClick }: I_AddCharacterCardProps) => {
  return (
    <S.Card onClick={onClick}>
      <div>{t('windowCharacters.createCharacter')}</div>
      <S.CardIcon>
        <PlusIcon />
      </S.CardIcon>
    </S.Card>
  )
}
