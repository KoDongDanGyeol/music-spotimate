"use client"

import styled from "styled-components"
import { useController, Control, FieldValues, FieldPath, RegisterOptions } from "react-hook-form"

export interface TextareaMainProps<T extends FieldValues> extends React.HTMLAttributes<HTMLTextAreaElement> {
  autoComplete?: "on" | "off"
  control: Control<T>
  disabled?: boolean
  isAutoGrow?: boolean
  name: FieldPath<T>
  placeholder?: string
  rows?: number
  rules?: RegisterOptions<T>
  onBlur?: () => void
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextareaMain = <T extends FieldValues>(props: TextareaMainProps<T>) => {
  const {
    autoComplete = "off",
    control,
    disabled = false,
    isAutoGrow = false,
    name,
    placeholder = "",
    rows = 2,
    rules,
    className = "",
    onBlur,
    onChange,
    ...restProps
  } = props

  const { field, fieldState } = useController({ control, name, rules })

  return (
    <TextareaMainContainer
      className={`${className} ${disabled ? "disabled" : ""} ${fieldState.invalid ? "invalid" : ""}`}
    >
      <Field>
        <textarea
          ref={field.ref}
          autoComplete={autoComplete}
          disabled={disabled}
          id={name}
          placeholder={placeholder}
          required={Boolean(rules?.required)}
          rows={rows}
          value={field.value || ""}
          className={`${isAutoGrow ? "autoGrow" : ""}`}
          onBlur={() => {
            field.onBlur()
            onBlur?.()
          }}
          onChange={(event) => {
            if (event.target.value) field.onChange(event.target.value)
            else field.onChange("")
            onChange?.(event)
          }}
          {...restProps}
        />
        {isAutoGrow && <span aria-hidden="true">{(field.value || "") + " "}</span>}
      </Field>
    </TextareaMainContainer>
  )
}

const Field = styled.div`
  position: relative;
  display: grid;
  flex: 1 1 0%;
  min-width: 0;
  textarea,
  span {
    grid-area: 1 / 1 / 2 / 2;
    padding: 6px 12px;
    font-size: ${(props) => props.theme.typo.size.sm};
    line-height: ${(props) => props.theme.typo.leading.relaxed};
  }
  textarea {
    min-height: 35px;
    resize: none;
    overflow: auto;
  }
  textarea.autoGrow {
    overflow: hidden;
  }
  span {
    visibility: hidden;
    white-space: pre-wrap;
    pointer-events: none;
  }
`

const TextareaMainContainer = styled.div`
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

export default TextareaMain
