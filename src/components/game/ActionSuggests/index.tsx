import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import * as C from 'styles/components'

// $Жизни = 50
// $Ролл = 20
// $Макс. Жизни = 100
// $Жизни * ($Сила + [12-24]) + (8 + $Ролл) - $Макс. Жизни

type T_ActionSuggest = {
  label: string
  values: { id: string; label: string; value: string; description?: string }[]
}

const calcSuggests: T_ActionSuggest[] = [
  {
    label: 'Бары',
    values: [
      { id: '123', label: 'Жизни', value: '$Жизни$' },
      { id: '124', label: 'Макс. Жизни', value: '$Макс. Жизни$' },
      { id: '125', label: 'Мана', value: '$Мана$' },
      { id: '126', label: 'Макс. Мана', value: '$Макс. Мана$' },
    ],
  },
  {
    label: 'Характеристики',
    values: [
      { id: '127', label: 'Сила', value: '$Сила$' },
      { id: '128', label: 'Интеллект', value: '$Интеллект$' },
    ],
  },
  {
    label: 'Другое',
    values: [
      { id: '129', label: 'Ролл', value: '$Ролл$', description: 'Последний бросок кубика игрока' },
      {
        id: '130',
        label: 'Диапазон',
        value: '[10-15]',
        description: 'При выполнении действия берётся случайное число из диапазона',
      },
    ],
  },
]

interface I_ActionSuggestsProps {
  onClose: () => void
  onSelect: (suggest: any) => void
}

export const ActionSuggests = ({ onClose, onSelect }: I_ActionSuggestsProps) => {
  return (
    <S.SuggestsWrapper>
      <S.SuggestsHead>
        <div>Переменные окружения</div>
        <C.Control onClick={onClose}>
          <CloseIcon />
        </C.Control>
      </S.SuggestsHead>
      <div>
        {calcSuggests.map((suggestGroup) => (
          <S.SuggestsGroup key={suggestGroup.label}>
            <S.SuggestsGroupTitle>{suggestGroup.label}</S.SuggestsGroupTitle>
            <div>
              {suggestGroup.values.map((suggest) => (
                <S.SuggestItem key={suggest.id} onClick={() => onSelect(suggest)}>
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
