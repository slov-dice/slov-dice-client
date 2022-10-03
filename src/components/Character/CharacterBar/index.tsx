import { useRef } from 'react'

import * as S from './styles'

import { setBarValue } from 'features/WindowManager/components/Characters/slice'
import { useEditableNumeric } from 'hooks/useEditableNumeric'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { T_CharacterBar } from 'models/game/character'
import { numberWithSpaces } from 'utils/helpers/text'

interface I_BarProps {
  values: T_CharacterBar
  characterId: string
}

export const CharacterBar = ({ values, characterId }: I_BarProps) => {
  const dispatch = useStoreDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const calculateValue = () => {
    if (/^[+-][0-9]+$/.test(inputValue)) {
      let result = values.current + +inputValue
      if (result < 0) result = 0
      dispatch(setBarValue({ characterId, barName: values.name, barValue: result }))
      return
    }

    if (/^[0-9]+$/.test(inputValue)) {
      dispatch(setBarValue({ characterId, barName: values.name, barValue: +inputValue }))
    }
  }

  const { handleEdit, handleKeyDown, handleBlur, isEdit, inputValue, handleChangeInput } =
    useEditableNumeric({
      inputRef,
      initialInputValue: String(values.current),
      onEnterPress: calculateValue,
    })

  return (
    <S.Bar>
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

      <S.BarProgress color={values.color} width={(values.current * 100) / values.max} />
    </S.Bar>
  )
}
