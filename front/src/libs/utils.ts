export const isContains = <T extends string>(list: ReadonlyArray<T>, value: string): value is T => {
  return list.some((item) => item === value)
}
