import LabelMain from "@/components/entry/Label/Main"

export const LabelNecessity = {
  Icon: "icon",
  Text: "text",
} as const

export type LabelNecessity = (typeof LabelNecessity)[keyof typeof LabelNecessity]

export const LabelSize = {
  XS: "xs",
  SM: "sm",
  BASE: "base",
  LG: "lg",
  XL: "xl",
} as const

export type LabelSize = (typeof LabelSize)[keyof typeof LabelSize]

export default Object.assign(LabelMain, {
  //
})
