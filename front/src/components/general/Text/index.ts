import TextMain from "@/components/general/Text/Main"

export const TextSize = {
  XS: "xs",
  SM: "sm",
  BASE: "base",
  LG: "lg",
  XL: "xl",
  "2XL": "2xl",
  "3XL": "3xl",
  "4XL": "4xl",
  "5XL": "5xl",
  "6XL": "6xl",
  "7XL": "7xl",
  "8XL": "8xl",
} as const

export type TextSize = (typeof TextSize)[keyof typeof TextSize]

export default Object.assign(TextMain, {
  //
})
