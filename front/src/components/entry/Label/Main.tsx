"use client"

import { forwardRef } from "react"
import styled from "styled-components"
import { NonUndefined } from "@/libs/utils"
import { PolymorphicComponentPropWithRef, PolymorphicRef } from "@/types/polymorphic"
import { LabelNecessity, LabelSize } from "@/components/entry/Label"

export type LabelMainProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    isRequired?: boolean
    necessity?: LabelNecessity
    size?: LabelSize
  }
>

export type LabelMainComponent = <C extends React.ElementType = "label">(props: LabelMainProps<C>) => React.ReactNode

const LabelMain: LabelMainComponent = forwardRef(function LabelMain<C extends React.ElementType = "label">(
  props: LabelMainProps<C>,
  ref?: PolymorphicRef<C>,
): React.ReactNode {
  const {
    as,
    isRequired = false,
    necessity = LabelNecessity.Icon,
    size = LabelSize.SM,
    className = "",
    children,
    ...restProps
  } = props

  return (
    <LabelMainContainer ref={ref} as={as ?? "label"} className={`${className}`} $size={size} {...restProps}>
      {children}
      {necessity === LabelNecessity.Icon && isRequired && (
        <Required>
          <em className="asterisk" aria-hidden="true"></em>
          <em className="sr-only">(필수)</em>
        </Required>
      )}
      {necessity === LabelNecessity.Text && !isRequired && (
        <Required>
          <em>(선택)</em>
        </Required>
      )}
    </LabelMainContainer>
  )
})

interface LabelMainStyled<C extends React.ElementType = "label"> {
  $size: NonUndefined<LabelMainProps<C>["size"]>
}

const Required = styled.span`
  .asterisk:before {
    content: "*";
    font-size: 1em;
    line-height: ${({ theme }) => theme.typo.leading.none};
    color: hsl(var(--color-red900));
    vertical-align: middle;
  }
`

const LabelMainContainer = styled.label<LabelMainStyled>`
  display: block;
  font-size: ${(props) => props.theme.typo.size[props.$size]};
  line-height: ${(props) => props.theme.typo.leading[props.$size]};
  font-weight: 500;
  ${Required} {
    margin-left: 2px;
  }
`

export default LabelMain
