import * as S from './styles'

import { t } from 'languages'

interface SwitchProps {
  value: string
  options: T_SwitchOption[]
  onChange: (option: T_SwitchOption) => void
  name: string
}

export type T_SwitchOption = {
  value: string
  label: string
}

export const Switch = ({ value, options, onChange, name }: SwitchProps) => {
  const handleChange = (item: T_SwitchOption) => () => {
    onChange(item)
  }

  return (
    <S.Switch>
      {options.map((item, idx) => (
        <S.Option key={idx} isSelected={item.value === value} onClick={handleChange(item)}>
          {t(item.label)}
          {item.value === value ? <S.Underline layoutId={name} /> : null}
        </S.Option>
      ))}
    </S.Switch>
  )
}
