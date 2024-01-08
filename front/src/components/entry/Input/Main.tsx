"use client"

import styled from "styled-components"
import { useController, Control, FieldValues, FieldPath, RegisterOptions } from "react-hook-form"

export interface InputMainProps<T extends FieldValues> extends React.HTMLAttributes<HTMLInputElement> {
  autoComplete?: "on" | "off"
  control: Control<T>
  disabled?: boolean
  max?: string | number
  min?: string | number
  name: FieldPath<T>
  placeholder?: string
  rules?: RegisterOptions<T>
  type?: string
  onBlur?: () => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputMain = <T extends FieldValues>(props: InputMainProps<T>) => {
  const {
    autoComplete = "off",
    control,
    disabled = false,
    max,
    min,
    name,
    placeholder = "",
    rules,
    type = "text",
    className = "",
    onBlur,
    onChange,
    ...restProps
  } = props

  const { field, fieldState } = useController({ control, name, rules })

  return (
    <InputMainContainer className={`${className} ${disabled ? "disabled" : ""} ${fieldState.invalid ? "invalid" : ""}`}>
      <Field>
        <input
          ref={field.ref}
          autoComplete={autoComplete}
          disabled={disabled}
          id={name}
          max={max}
          min={min}
          required={Boolean(rules?.required)}
          placeholder={placeholder}
          type={type}
          value={field.value || ""}
          onChange={(event) => {
            if (event.target.value)
              field.onChange(
                type === "number"
                  ? +event.target.value
                  : type === "tel"
                    ? event.target.value.match(/\d+/g)?.join("")
                    : event.target.value,
              )
            else field.onChange("")
            onChange?.(event)
          }}
          onBlur={() => {
            field.onBlur()
            onBlur?.()
          }}
          {...restProps}
        />
      </Field>
    </InputMainContainer>
  )
}

const Field = styled.div`
  position: relative;
  flex: 1 1 0%;
  min-width: 0;
  input {
    padding: 6px 12px;
    font-size: ${(props) => props.theme.typo.size.sm};
    line-height: ${(props) => props.theme.typo.leading.relaxed};
  }
`

const InputMainContainer = styled.div`
  display: flex;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: hsl(var(--color-gray400));
  background: transparent;
  border-radius: 6px;
  &.invalid {
    border-color: hsl(var(--color-red700));
  }
  &.disabled {
    background: hsl(var(--color-gray200));
  }
  * ~ &,
  & ~ * {
    margin-top: 8px;
  }
`

export default InputMain
