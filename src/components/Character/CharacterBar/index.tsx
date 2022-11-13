import { useRef } from 'react'

import * as S from './styles'

import { useEditable } from 'hooks/useEditable'
import { T_CharacterBar } from 'models/shared/game/character'
import { calculateBarDimension } from 'utils/helpers/calculates'
import { numberWithSpaces } from 'utils/helpers/text'

interface I_BarProps {
  values: T_CharacterBar
  onChange: (name: string, value: number) => void
}

export const CharacterBar = ({ values, onChange }: I_BarProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const calculateValue = () => {
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
      onEnterPress: calculateValue,
      pattern: 'numeric',
    })

  return (
    <S.BarWrapper>
      {isEdit ? (
        <S.BarInput
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          maxLength={16}
        />
      ) : (
        <S.BarLabel onClick={handleEdit}>
          {numberWithSpaces(values.current)}/{numberWithSpaces(values.max)}
        </S.BarLabel>
      )}

      <S.BarProgress
        color={values.color}
        width={calculateBarDimension(values.current, values.max)}
      />
    </S.BarWrapper>
  )
}
