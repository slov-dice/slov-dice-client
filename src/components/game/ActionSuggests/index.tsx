import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { t } from 'languages'
import { T_ActionSuggest, T_ActionSuggestValue } from 'models/shared/game/battlefield/action'
import * as C from 'styles/components'

// $Жизни$ = 50
// $Ролл$ = 1D20
// $Макс. Жизни$ = 100
// [a,b] - рандомное число из диапазона a-b
// $Жизни$ * ($Сила$ + [12-24]) + (8 + $Ролл$) - $Макс. Жизни$

// В строке могут быть числа, знаки $ + - * /, круглые и квадратные скобки
// Текст может быть обособлен знаком $

interface I_ActionSuggestsProps {
  onClose: () => void
  onSelect: (suggest: T_ActionSuggestValue) => void
  suggests: T_ActionSuggest[]
}

export const ActionSuggests = ({ onClose, onSelect, suggests }: I_ActionSuggestsProps) => {
  return (
    <S.SuggestsWrapper>
      <S.SuggestsHead>
        <div>{t('actionsEditor.suggests.title')}</div>
        <C.Control onClick={onClose}>
          <CloseIcon />
        </C.Control>
      </S.SuggestsHead>
      <div>
        {suggests.map((suggestsGroup) => (
          <S.SuggestsGroup key={suggestsGroup.label}>
            <S.SuggestsGroupTitle>{t(suggestsGroup.label)}</S.SuggestsGroupTitle>
            <div>
              {suggestsGroup.values.map((suggest) => (
                <S.SuggestItem
                  key={suggest.id}
                  onClick={() => onSelect(suggest)}
                  color={suggest.color}
                >
                  <S.SuggestItemLabel>{suggest.label}</S.SuggestItemLabel>
                  {suggest.description && (
                    <S.SuggestItemDescription>{suggest.description}</S.SuggestItemDescription>
                  )}
                </S.SuggestItem>
              ))}
            </div>
          </S.SuggestsGroup>
        ))}
      </div>
    </S.SuggestsWrapper>
  )
}
