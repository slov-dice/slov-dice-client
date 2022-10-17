export const calculateBarDimension = (current: number, max: number) => {
  const result = (current * 100) / max
  if (result > 100) {
    return 100
  }
  return result
}
