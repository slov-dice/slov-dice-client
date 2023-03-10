export type T_ActionSuggest = {
  label: string
  values: T_ActionSuggestValue[]
}

export type T_ActionSuggestValue = {
  id: string
  label: string
  value: string
  description?: string
  color?: string
}
