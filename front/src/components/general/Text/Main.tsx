"use client"

import { forwardRef } from "react"
import styled from "styled-components"
import { NonUndefined } from "@/libs/utils"
import { PolymorphicComponentPropWithRef, PolymorphicRef } from "@/types/polymorphic"
import { TextSize } from "@/components/general/Text"

export type TextMainProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    size?: TextSize
  }
>

export type TextMainComponent = <C extends React.ElementType = "p">(props: TextMainProps<C>) => React.ReactNode

const TextMain: TextMainComponent = forwardRef(function TextMain<C extends React.ElementType = "p">(
  props: TextMainProps<C>,
  ref?: PolymorphicRef<C>,
): React.ReactNode {
  const { as, size = TextSize.BASE, className = "", children, ...restProps } = props

  return (
    <TextMainContainer ref={ref} as={as ?? "p"} className={`${className}`} $size={size} {...restProps}>
      {children}
    </TextMainContainer>
  )
})

interface TextMainStyled<C extends React.ElementType = "p"> {
  $size: NonUndefined<TextMainProps<C>["size"]>
}

const TextMainContainer = styled.p<TextMainStyled>`
  font-size: ${(props) => props.theme.typo.size[props.$size]};
  line-height: ${(props) => props.theme.typo.leading[props.$size]};
`

export default TextMain
