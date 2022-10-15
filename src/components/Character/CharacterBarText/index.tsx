import { useRef } from 'react'

import * as S from './styles'

import { useEditable } from 'hooks/useEditable'
import { numberWithSpaces } from 'utils/helpers/text'

interface I_CharacterBarTextProps {
  value: number
  name: string
  onChange: (name: string, value: number) => void
}

export const CharacterBarText = ({ value, onChange, name }: I_CharacterBarTextProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const calculateValue = () => {
    if (/^[+-][0-9]+$/.test(inputValue)) {
      let result = value + +inputValue
      if (result < 0) result = 0
      onChange(name, result)
      return
    }

    if (/^[0-9]+$/.test(inputValue)) {
      onChange(name, +inputValue)
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
