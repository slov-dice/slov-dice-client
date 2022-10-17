import { useRef } from 'react'

import * as S from './styles'

import { useEditable } from 'hooks/useEditable'
import { T_CharacterSpecial } from 'models/game/character'

interface I_CharacterSpecial {
  values: T_CharacterSpecial
  onChange: (name: string, value: number) => void
}

export const CharacterSpecial = ({ values, onChange }: I_CharacterSpecial) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCalculateValue = () => {
    if (/^[+-][0-9]+$/.test(inputValue)) {
      let result = values.current + +inputValue
      if (result < 0) result = 0
      onChange(values.name, result)
      return
    }

    if (/^[0-9]+$/.test(inputValue)) {
      onChange(values.name, +inputValue)
    }
  }

  const { handleEdit, handleKeyDown, handleBlur, isEdit, inputValue, handleChangeInput } =
    useEditable({
      inputRef,
      initialInputValue: String(values.current),
      onEnterPress: handleCalculateValue,
      pattern: 'numeric',
    })

  return (
    <S.SpecialWrapper onClick={!isEdit ? handleEdit : undefined}>
      <span>{values.name}</span>{' '}
      {isEdit ? (
        <S.SpecialInput
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          maxLength={4}
        />
      ) : (
        <S.SpecialValue>{values.current}</S.SpecialValue>
      )}
    </S.SpecialWrapper>
  )
}
