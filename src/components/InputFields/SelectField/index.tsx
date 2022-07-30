import { ChangeEvent, useRef, useState } from 'react'

import * as S from './styles'

import { useClickOutside } from 'hooks/useClickOutside'

interface SelectFieldProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  fullWidth?: boolean
}

export const SelectField = ({ value, onChange, options, fullWidth = false }: SelectFieldProps) => {
  const [isOpened, setOpened] = useState(false)
  const wrapperRef = useRef(null)

  const handleClose = () => {
    setOpened(false)
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  useClickOutside(wrapperRef, handleClose)

  return (
    <S.WrapperSelect
      ref={wrapperRef}
      onClick={() => setOpened((prev) => !prev)}
      isOpened={isOpened}
    >
      <S.Select value={value} onChange={handleChange} fullWidth={fullWidth}>
        {options.map((item) => (
          <S.Option key={item} value={item}>
            {item}
          </S.Option>
        ))}
      </S.Select>
    </S.WrapperSelect>
  )
}
