import { useMemo, useState } from 'react'

import { T_CustomSelectOption } from './models'
import * as S from './styles'

interface I_CustomSelectFieldProps {
  fieldIndex?: number
  options: T_CustomSelectOption[]
  onChange: (option: T_CustomSelectOption, fieldIndex?: number) => void
  value: string | null
}

export const CustomSelectField = ({
  options,
  onChange,
  value,
  fieldIndex,
}: I_CustomSelectFieldProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const currentValue = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  )

  const handleToggle = () => setIsOpen((prev) => !prev)

  const handleClickOption = (option: T_CustomSelectOption) => () => {
    onChange(option, fieldIndex)
    handleToggle()
  }

  return (
    <S.SelectContainer>
      <S.SelectHeader onClick={handleToggle}>{currentValue?.label || '-'}</S.SelectHeader>
      {isOpen && (
        <S.SelectListWrapper>
          <S.SelectList>
            {options.map((option) => (
              <S.ListItem onClick={handleClickOption(option)} key={option.value}>
                {option.label}
              </S.ListItem>
            ))}
          </S.SelectList>
        </S.SelectListWrapper>
      )}
    </S.SelectContainer>
  )
}
