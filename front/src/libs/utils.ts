import { Children, isValidElement } from "react"

export type Nullable<T> = T | null | undefined

export type NonNullable<T> = T extends null | undefined ? never : T

export type NonUndefined<T> = T extends undefined ? never : T

export type ObjectEntries<T extends object> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

export type ObjectKeys<T extends object> = Array<keyof T>

export type ObjectValues<T extends object> = Array<T[keyof T]>

export const regexHashtag = /(#[^\s#]+)/gi

export const regexUrl = /https?:\/\/[^\s]+/gi

export const isContains = <T extends string>(list: ReadonlyArray<T>, value: string): value is T => {
  return list.some((item) => item === value)
}

export const isEquals = (...arrays: unknown[][]): boolean => {
  if (arrays.length < 2) return false
  const [firstArray, ...restArrays] = arrays
  return restArrays.every((arr) => isEqualsInternal(firstArray, arr))
}

export const isEqualsInternal = (arr1: unknown[], arr2: unknown[]): boolean => {
  if (arr1.length !== arr2.length) return false
  return arr1.every((element, index) => {
    if (!Array.isArray(element) || !Array.isArray(arr2[index])) return element === arr2[index]
    return isEqualsInternal(element, arr2[index] as unknown[])
  })
}

export const toPascal = (value: string) => {
  const capitalizedWords = value.split(/[-\s]/).map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  return capitalizedWords.join("")
}

export const getChildProps = <T extends React.FC<P>, P>(child: React.ReactNode, type: T): P | null => {
  for (const node of Children.toArray(child)) {
    if (!isValidElement(node)) continue
    return node.type === type ? { ...node.props } : getChildProps(node.props.children, type)
  }
  return null
}
