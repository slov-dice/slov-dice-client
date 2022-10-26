import { T_SwitchOption } from './model'
import * as S from './styles'

interface SwitchProps {
  value: string
  options: T_SwitchOption[]
  onChange: (option: T_SwitchOption) => void
}

export const Switch = ({ value, options, onChange }: SwitchProps) => {
  const handleChange = (item: T_SwitchOption) => () => {
    onChange(item)
  }

  return (
    <S.Switch>
      {options.map((item, idx) => (
        <S.Option key={idx} isSelected={item.value === value} onClick={handleChange(item)}>
          {item.label}
          {item.value === value ? <S.Underline layoutId='underline' /> : null}
        </S.Option>
      ))}
    </S.Switch>
  )
}
