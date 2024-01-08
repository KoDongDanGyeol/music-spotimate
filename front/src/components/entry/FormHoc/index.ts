import FormHocMain from "@/components/entry/FormHoc/Main"

export const FormHocLayout = {
  Default: "default",
  Column: "column",
} as const

export type FormHocLayout = (typeof FormHocLayout)[keyof typeof FormHocLayout]

export default Object.assign(FormHocMain, {
  //
})
