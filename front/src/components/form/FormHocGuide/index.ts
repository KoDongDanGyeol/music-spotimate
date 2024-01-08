import { FieldValues } from "react-hook-form"
import FormHocGuideMain from "@/components/form/FormHocGuide/Main"
import FormHocGuideOverview from "@/components/form/FormHocGuide/Overview"

export interface FormHocGuideTypes extends FieldValues {
  title: string
  description: string
}

export default Object.assign(FormHocGuideMain, {
  Overview: FormHocGuideOverview,
})
