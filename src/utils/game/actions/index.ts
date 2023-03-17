import { E_Locale } from 'models/shared/app'
import { T_ActionSuggest } from 'models/shared/game/battlefield/action'
import { T_BaseCharacterBar, T_BaseCharacterSpecial } from 'models/shared/game/character'
import { regExp } from 'utils/helpers/regExp'

const actionOthersSuggestsValuesRu = [
  { id: '1a', label: 'Ролл', value: '$Ролл$', description: 'Последний бросок кубика игрока' },
  {
    id: '1b',
    label: 'Диапазон',
    value: '[a,b]',
    description: 'При выполнении действия берётся случайное число из диапазона',
  },
]

const actionOthersSuggestsValuesEn = [
  { id: '1a', label: 'Roll', value: '$Roll$', description: 'The last roll player' },
  {
    id: '1b',
    label: 'Range',
    value: '[a,b]',
    description: 'When performing an action, a random number is taken from the range',
  },
]

export const getActionSuggests = (
  bars: T_BaseCharacterBar[],
  specials: T_BaseCharacterSpecial[],
  type: string | undefined,
  locale: E_Locale,
): T_ActionSuggest[] => {
  const result: T_ActionSuggest[] = []

  if (!type) return result

  result.push({
    label: 'actionsEditor.suggests.bars',
    values: bars
      .map((bar) => [
        {
          id: bar.id,
          label: bar.name,
          value: `$${bar.name}$`,
          color: bar.color,
        },
        {
          id: `${bar.id}_MAX`,
          label: locale === E_Locale.ru ? `Макс. ${bar.name}` : `Max ${bar.name}`,
          value: locale === E_Locale.ru ? `$Макс. ${bar.name}$` : `$Max ${bar.name}$`,
          color: bar.color,
        },
      ])
      .flat(),
  })

  if (type.startsWith('character')) {
    result.push({
      label: 'actionsEditor.suggests.specials',
      values: specials.map((special) => ({
        id: special.id,
        label: special.name,
        value: `$${special.name}$`,
      })),
    })
  }

  result.push({
    label: 'actionsEditor.suggests.others',
    values: locale === E_Locale.ru ? actionOthersSuggestsValuesRu : actionOthersSuggestsValuesEn,
  })

  return result
}

// value: $Жизни$ * ($Сила$ + [12-24]) + (8 + $Ролл$) - $Макс. Жизни$
export const validateActionValue = (value: string): string => {
  if (!value) return 'actionsEditor.validation.emptyValue'

  const result = calculate(
    value
      // Определение переменных
      .replace(regExp.onlyActionVariable, (_, match) => {
        if (match.startsWith('Max') || match.startsWith('Макс.')) {
          return '2'
        }
        return '1'
      })
      // Определение диапазонов
      .replace(regExp.onlyActionRange, (_, match) => {
        return match.split(',')[0]
      })
      // Удаление пробелов
      .replace(regExp.onlyWhitespace, ''),
  )

  return 'actionsEditor.validation.validValue'
}

function calculate(input: string): number {
  const stack: (string | number)[] = []

  let num = 0
  let op = '+'

  for (let i = 0; i < input.length; i++) {
    const item = input[i]

    if (!isNaN(parseInt(item))) {
      num = num * 10 + parseInt(item)
    }

    if (item === '(') {
      // Рекурсивно вычисляем значение в скобках
      const subInput = getSubInput(input.substring(i))
      num = calculate(subInput)
      i += subInput.length + 1
    }

    if (isNaN(parseInt(item)) || i === input.length - 1) {
      if (op === '+') {
        stack.push(num)
      } else if (op === '-') {
        stack.push(-num)
      } else if (op === '*') {
        stack.push((stack.pop() as number) * num)
      } else if (op === '/') {
        stack.push((stack.pop() as number) / num)
      }

      num = 0
      op = item
    }
  }
  return (stack as number[]).reduce((acc, val) => acc + val, 0)
}

function getSubInput(input: string): string {
  let count = 1
  let subInput = ''

  for (let i = 1; i < input.length; i++) {
    if (input[i] === '(') {
      count++
    } else if (input[i] === ')') {
      count--
    }

    if (count === 0) {
      break
    }

    subInput += input[i]
  }

  return subInput
}
