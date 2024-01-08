"use client"

import styled, { css } from "styled-components"
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form"
import { NonUndefined } from "@/libs/utils"
import { FormHocLayout } from "@/components/entry/FormHoc"

export interface FormHocMainProps<T extends FieldValues>
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLFormElement>> {
  formAction?: {
    reset?: string
    submit?: string
  }
  formData: UseFormReturn<T>
  formLayout?: FormHocLayout
  formOverview?: React.ReactNode
  formPlaceholder?: {
    [key in keyof T]?: T[key] extends object
      ? { [subKey in keyof T[key]]?: string }
      : T[key] extends Array<object>
        ? { [subKey in keyof T[key][number]]?: string }
        : string
  }
  isLoading?: boolean
  isSuccess?: boolean
  handleValid: SubmitHandler<T>
}

const FormHocMain = <T extends FieldValues>(FormHocMain: (props: FormHocMainProps<T>) => React.ReactNode) => {
  return function Form(props: FormHocMainProps<T>) {
    const { formLayout = FormHocLayout.Default, className = "", ...restProps } = props
    return (
      <FormHocMainComponent className={`${className}`} $formLayout={formLayout}>
        <FormHocMain {...restProps} />
      </FormHocMainComponent>
    )
  }
}

interface FormHocMainStyled<T extends FieldValues = object> {
  $formLayout: NonUndefined<FormHocMainProps<T>["formLayout"]>
}

const Default = css`
  > div,
  > form {
    grid-column: span 3;
  }
`

const Column = css`
  > div {
    grid-column: span 1;
  }
  > form {
    grid-column: span 3;
  }
  > div + form {
    grid-column: span 2;
  }
  @media ${({ theme }) => theme.screen.device.md} {
    > div {
      grid-column: span 3;
    }
    > form {
      grid-column: span 3;
    }
    > div + form {
      grid-column: span 3;
    }
  }
`

const FormHocMainComponent = styled.div<FormHocMainStyled>`
  ${(props) =>
    props.$formLayout === FormHocLayout.Default
      ? [Default]
      : props.$formLayout === FormHocLayout.Column
        ? [Column]
        : null}
  display: grid;
  row-gap: 24px;
  column-gap: 32px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  form {
    grid-column: span 3;
    > div + div {
      margin-top: 24px;
    }
    .action {
      margin-top: 24px;
      display: flex;
      justify-content: flex-end;
      gap: 16px;
    }
  }
`

export default FormHocMain
