import { useRef } from 'react'

import * as S from './styles'

import { useEditable } from 'hooks/useEditable'
import { T_CharacterBar, T_BaseCharacterBar } from 'models/shared/game/character'
import { calculateBarDimension } from 'utils/helpers/calculates'
import { regExp } from 'utils/helpers/regExp'
import { numberWithSpaces } from 'utils/helpers/text'

interface I_BarProps {
  bar: T_BaseCharacterBar & T_CharacterBar
  onChange: (name: string, value: number) => void
}

export const CharacterBar = ({ bar, onChange }: I_BarProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const calculateValue = () => {
    if (regExp.onlyNumberWithCalc.test(inputValue)) {
      let result = bar.current + +inputValue
      if (result < 0) result = 0
      onChange(bar.id, result)
      return
    }

    if (regExp.onlyNumber.test(inputValue)) {
      onChange(bar.id, +inputValue)
    }
  }

  const { handleEdit, handleKeyDown, handleBlur, isEdit, inputValue, handleChangeInput } =
    useEditable({
      inputRef,
      initialInputValue: String(bar.current),
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
          {numberWithSpaces(bar.current)}/{numberWithSpaces(bar.max)}
        </S.BarLabel>
      )}

      <S.BarProgress color={bar.color} width={calculateBarDimension(bar.current, bar.max)} />
    </S.BarWrapper>
  )
}
