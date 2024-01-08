import HelperMain from "@/components/entry/Helper/Main"

export const HelperVariants = {
  Default: "default",
  Error: "error",
} as const

export type HelperVariants = (typeof HelperVariants)[keyof typeof HelperVariants]

export default Object.assign(HelperMain, {
  //
})
