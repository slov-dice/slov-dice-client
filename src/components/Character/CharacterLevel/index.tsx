import { useRef } from 'react'

import * as S from './styles'

import { useEditableNumeric } from 'hooks/useEditableNumeric'

interface I_CharacterSpecial {
  value: number
  onChange: (value: number) => void
}

export const CharacterLevel = ({ value, onChange }: I_CharacterSpecial) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const calculateValue = () => {
    if (/^[+-][0-9]+$/.test(inputValue)) {
      let result = value + +inputValue
      if (result < 0) result = 0
      onChange(result)
      return
    }

    if (/^[0-9]+$/.test(inputValue)) {
      onChange(+inputValue)
    }
  }

  const { handleEdit, handleKeyDown, handleBlur, isEdit, inputValue, handleChangeInput } =
    useEditableNumeric({
      inputRef,
      initialInputValue: String(value),
      onEnterPress: calculateValue,
    })

  return (
    <S.Level onClick={!isEdit ? handleEdit : undefined}>
      {isEdit ? (
        <S.LevelInput
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          maxLength={3}
        />
      ) : (
        <S.LevelLabel>Уровень {value}</S.LevelLabel>
      )}
    </S.Level>
  )
}
