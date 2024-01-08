"use client"

import { FieldValues } from "react-hook-form"
import FormHoc from "@/components/entry/FormHoc"
import { FormHocMainProps } from "@/components/entry/FormHoc/Main"
import { FormHocGuideTypes } from "@/components/form/FormHocGuide"
import Helper from "@/components/entry/Helper"
import Input from "@/components/entry/Input"
import Label from "@/components/entry/Label"
import Textarea from "@/components/entry/Textarea"
import Button from "@/components/general/Button"

export interface FormHocGuideMainProps<T extends FieldValues = FormHocGuideTypes> extends FormHocMainProps<T> {
  //
}

const FormHocGuideMain = FormHoc<FormHocGuideTypes>((props: FormHocGuideMainProps) => {
  const { formAction, formData, formOverview, formPlaceholder, isLoading, handleValid, ...restProps } = props

  const { control, handleSubmit, formState } = formData

  return (
    <>
      {formOverview && <>{formOverview}</>}
      <form id="form-validation" onSubmit={handleSubmit(handleValid)} noValidate {...restProps}>
        <div>
          <Label as="label" htmlFor="title">
            제목
          </Label>
          <Input<FormHocGuideTypes>
            control={control}
            name="title"
            placeholder={formPlaceholder?.title}
            rules={{
              required: {
                value: true,
                message: "제목을 입력해 주세요",
              },
            }}
            type="text"
          />
          <Helper variants="error">{formState?.errors?.title?.message}</Helper>
        </div>

        <div>
          <Label as="label" htmlFor="description">
            내용
          </Label>
          <Textarea<FormHocGuideTypes>
            control={control}
            name="description"
            placeholder={formPlaceholder?.description}
            rules={{
              required: {
                value: true,
                message: "내용을 입력해 주세요",
              },
            }}
          />
          <Helper variants="default">Lorem ipsum dolor sit</Helper>
          <Helper variants="error">{formState?.errors?.description?.message}</Helper>
        </div>

        <div className="action">
          <Button type="reset" emphasis="minimal" disabled={isLoading}>
            {formAction?.reset ?? "Reset"}
          </Button>
          <Button type="submit" emphasis="bold" disabled={isLoading}>
            {formAction?.submit ?? "Submit"}
          </Button>
        </div>
      </form>
    </>
  )
})

export default FormHocGuideMain
