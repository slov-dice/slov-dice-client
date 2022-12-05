import { useRef } from 'react'

import * as S from './styles'

import { useEditable } from 'hooks/useEditable'
import { T_CharacterBarId } from 'models/shared/game/character'
import { regExp } from 'utils/helpers/regExp'
import { numberWithSpaces } from 'utils/helpers/text'

interface I_CharacterBarTextProps {
  value: number
  id: T_CharacterBarId
  onChange: (name: string, value: number) => void
}

export const CharacterBarText = ({ value, onChange, id }: I_CharacterBarTextProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const calculateValue = () => {
    if (regExp.onlyNumberWithCalc.test(inputValue)) {
      let result = value + +inputValue
      if (result < 0) result = 0
      onChange(id, result)
      return
    }

    if (regExp.onlyNumber.test(inputValue)) {
      onChange(id, +inputValue)
    }
  }

  const { handleEdit, handleKeyDown, handleBlur, isEdit, inputValue, handleChangeInput } =
    useEditable({
      inputRef,
      initialInputValue: String(value),
      onEnterPress: calculateValue,
      pattern: 'numeric',
    })

  return (
    <S.BarTextWrapper onClick={!isEdit ? handleEdit : undefined}>
      {isEdit ? (
        <S.BarTextInput
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          maxLength={16}
        />
      ) : (
        <span>{numberWithSpaces(value)}</span>
      )}
    </S.BarTextWrapper>
  )
}
