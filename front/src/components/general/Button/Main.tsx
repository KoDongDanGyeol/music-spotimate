"use client"

import { forwardRef } from "react"
import styled, { css } from "styled-components"
import { NonUndefined } from "@/libs/utils"
import { PolymorphicComponentPropWithRef, PolymorphicRef } from "@/types/polymorphic"
import { ButtonEmphasis, ButtonShape, ButtonSize, ButtonVariants } from "@/components/general/Button"

export type ButtonMainProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    emphasis?: ButtonEmphasis
    shape?: ButtonShape
    size?: ButtonSize
    variants?: ButtonVariants
  }
>

export type ButtonMainComponent = <C extends React.ElementType = "button">(props: ButtonMainProps<C>) => React.ReactNode

const ButtonMain: ButtonMainComponent = forwardRef(function ButtonMain<C extends React.ElementType = "button">(
  props: ButtonMainProps<C>,
  ref?: PolymorphicRef<C>,
): React.ReactNode {
  const {
    as,
    emphasis = ButtonEmphasis.Bold,
    shape = ButtonShape.Square,
    size = ButtonSize.BASE,
    variants = ButtonVariants.Primary,
    className = "",
    children,
    ...restProps
  } = props

  return (
    <ButtonMainContainer
      ref={ref}
      as={as ?? "button"}
      $emphasis={emphasis}
      $shape={shape}
      $size={size}
      $variants={variants}
      className={`${className}`}
      {...restProps}
    >
      {children}
    </ButtonMainContainer>
  )
})

interface ButtonMainStyled<C extends React.ElementType = "button"> {
  $emphasis: NonUndefined<ButtonMainProps<C>["emphasis"]>
  $shape: NonUndefined<ButtonMainProps<C>["shape"]>
  $size: NonUndefined<ButtonMainProps<C>["size"]>
  $variants: NonUndefined<ButtonMainProps<C>["variants"]>
}

const Square = css<ButtonMainStyled>`
  padding: ${(props) =>
    props.$size === ButtonSize.XS || props.$size === ButtonSize.SM
      ? "4px 8px"
      : props.$size === ButtonSize.BASE
        ? "6px 10px"
        : props.$size === ButtonSize.LG
          ? "8px 12px"
          : props.$size === ButtonSize.XL
            ? "10px 14px"
            : ""};
  font-size: ${(props) =>
    props.$size === ButtonSize.XS
      ? props.theme.typo.size.xs
      : props.$size === ButtonSize.SM ||
          props.$size === ButtonSize.BASE ||
          props.$size === ButtonSize.LG ||
          props.$size === ButtonSize.XL
        ? props.theme.typo.size.sm
        : ""};
  font-weight: 700;
  line-height: ${(props) =>
    props.$size === ButtonSize.XS
      ? props.theme.typo.leading.xs
      : props.$size === ButtonSize.SM ||
          props.$size === ButtonSize.BASE ||
          props.$size === ButtonSize.LG ||
          props.$size === ButtonSize.XL
        ? props.theme.typo.leading.sm
        : ""};
  border-width: 1px;
  border-style: solid;
  border-radius: ${(props) =>
    props.$size === ButtonSize.XS || props.$size === ButtonSize.SM
      ? "4px"
      : props.$size === ButtonSize.BASE || props.$size === ButtonSize.LG || props.$size === ButtonSize.XL
        ? "6px"
        : ""};
`

const SquarePrimary = css<ButtonMainStyled>`
  color: ${(props) =>
    props.$emphasis === ButtonEmphasis.Bold
      ? `hsl(var(--color-gray100))`
      : props.$emphasis === ButtonEmphasis.Subtle
        ? `hsla(var(--color-blue900), 90%)`
        : props.$emphasis === ButtonEmphasis.Minimal
          ? `hsla(var(--color-blue900), 90%)`
          : ""};
  background: ${(props) =>
    props.$emphasis === ButtonEmphasis.Bold
      ? `hsla(var(--color-blue900), 90%)`
      : props.$emphasis === ButtonEmphasis.Subtle
        ? `hsl(var(--color-gray100))`
        : props.$emphasis === ButtonEmphasis.Minimal
          ? `hsl(var(--color-gray100))`
          : ""};
  border-color: ${(props) =>
    props.$emphasis === ButtonEmphasis.Bold
      ? `hsla(var(--color-blue900), 90%)`
      : props.$emphasis === ButtonEmphasis.Subtle
        ? `hsla(var(--color-blue900), 90%)`
        : props.$emphasis === ButtonEmphasis.Minimal
          ? `hsl(var(--color-gray100))`
          : ""};
  &:hover,
  &:focus {
    background: ${(props) =>
      props.$emphasis === ButtonEmphasis.Bold
        ? `hsla(var(--color-blue900), 100%)`
        : props.$emphasis === ButtonEmphasis.Subtle
          ? `hsla(var(--color-blue900), 20%)`
          : props.$emphasis === ButtonEmphasis.Minimal
            ? `hsla(var(--color-blue900), 20%)`
            : ""};
    border-color: ${(props) =>
      props.$emphasis === ButtonEmphasis.Bold
        ? `hsla(var(--color-blue900), 100%)`
        : props.$emphasis === ButtonEmphasis.Subtle
          ? `hsla(var(--color-blue900), 90%)`
          : props.$emphasis === ButtonEmphasis.Minimal
            ? `hsla(var(--color-blue900), 20%)`
            : ""};
  }
`

const SquareSecondary = css<ButtonMainStyled>`
  color: ${(props) =>
    props.$emphasis === ButtonEmphasis.Bold
      ? `hsla(var(--color-gray900), 90%)`
      : props.$emphasis === ButtonEmphasis.Subtle
        ? `hsla(var(--color-gray900), 90%)`
        : props.$emphasis === ButtonEmphasis.Minimal
          ? `hsla(var(--color-gray900), 90%)`
          : ""};
  background: ${(props) =>
    props.$emphasis === ButtonEmphasis.Bold
      ? `hsl(var(--color-gray300))`
      : props.$emphasis === ButtonEmphasis.Subtle
        ? `hsl(var(--color-gray100))`
        : props.$emphasis === ButtonEmphasis.Minimal
          ? `hsl(var(--color-gray100))`
          : ""};
  border-color: ${(props) =>
    props.$emphasis === ButtonEmphasis.Bold
      ? `hsl(var(--color-gray300))`
      : props.$emphasis === ButtonEmphasis.Subtle
        ? `hsl(var(--color-gray300))`
        : props.$emphasis === ButtonEmphasis.Minimal
          ? `hsl(var(--color-gray100))`
          : ""};
  &:hover,
  &:focus {
    background: ${(props) =>
      props.$emphasis === ButtonEmphasis.Bold
        ? `hsla(var(--color-gray400), 100%)`
        : props.$emphasis === ButtonEmphasis.Subtle
          ? `hsla(var(--color-gray400), 15%)`
          : props.$emphasis === ButtonEmphasis.Minimal
            ? `hsla(var(--color-gray400), 15%)`
            : ""};
    border-color: ${(props) =>
      props.$emphasis === ButtonEmphasis.Bold
        ? `hsla(var(--color-gray400), 100%)`
        : props.$emphasis === ButtonEmphasis.Subtle
          ? `hsl(var(--color-gray300))`
          : props.$emphasis === ButtonEmphasis.Minimal
            ? `hsla(var(--color-gray400), 15%)`
            : ""};
  }
`

const SquareNegative = css<ButtonMainStyled>`
  color: ${(props) =>
    props.$emphasis === ButtonEmphasis.Bold
      ? `hsl(var(--color-gray100))`
      : props.$emphasis === ButtonEmphasis.Subtle
        ? `hsla(var(--color-red900), 90%)`
        : props.$emphasis === ButtonEmphasis.Minimal
          ? `hsla(var(--color-red900), 90%)`
          : ""};
  background: ${(props) =>
    props.$emphasis === ButtonEmphasis.Bold
      ? `hsla(var(--color-red900), 90%)`
      : props.$emphasis === ButtonEmphasis.Subtle
        ? `hsl(var(--color-gray100))`
        : props.$emphasis === ButtonEmphasis.Minimal
          ? `hsl(var(--color-gray100))`
          : ""};
  border-color: ${(props) =>
    props.$emphasis === ButtonEmphasis.Bold
      ? `hsla(var(--color-red900), 90%)`
      : props.$emphasis === ButtonEmphasis.Subtle
        ? `hsla(var(--color-red900), 90%)`
        : props.$emphasis === ButtonEmphasis.Minimal
          ? `hsl(var(--color-gray100))`
          : ""};
  &:hover,
  &:focus {
    background: ${(props) =>
      props.$emphasis === ButtonEmphasis.Bold
        ? `hsla(var(--color-red900), 100%)`
        : props.$emphasis === ButtonEmphasis.Subtle
          ? `hsla(var(--color-red900), 20%)`
          : props.$emphasis === ButtonEmphasis.Minimal
            ? `hsla(var(--color-red900), 20%)`
            : ""};
    border-color: ${(props) =>
      props.$emphasis === ButtonEmphasis.Bold
        ? `hsla(var(--color-red900), 100%)`
        : props.$emphasis === ButtonEmphasis.Subtle
          ? `hsla(var(--color-red900), 20%)`
          : props.$emphasis === ButtonEmphasis.Minimal
            ? `hsla(var(--color-red900), 20%)`
            : ""};
  }
`

const Plain = css<ButtonMainStyled>`
  font-size: ${(props) => props.theme.typo.size[props.$size]};
  line-height: ${(props) => props.theme.typo.leading[props.$size]};
  font-weight: ${(props) =>
    props.$emphasis === ButtonEmphasis.Bold
      ? ""
      : props.$emphasis === ButtonEmphasis.Subtle
        ? 700
        : props.$emphasis === ButtonEmphasis.Minimal
          ? ""
          : ""};
  text-decoration: ${(props) =>
    props.$emphasis === ButtonEmphasis.Bold
      ? "underline"
      : props.$emphasis === ButtonEmphasis.Subtle
        ? ""
        : props.$emphasis === ButtonEmphasis.Minimal
          ? ""
          : ""};
`

const PlainPrimary = css<ButtonMainStyled>`
  color: hsl(var(--color-blue900));
`

const PlainSecondary = css<ButtonMainStyled>`
  color: hsl(var(--color-gray900));
`

const PlainNegative = css<ButtonMainStyled>`
  color: hsl(var(--color-red900));
`

const ButtonMainContainer = styled.button<ButtonMainStyled>`
  ${(props) =>
    props.$shape === ButtonShape.Square
      ? props.$variants === ButtonVariants.Primary
        ? [Square, SquarePrimary]
        : props.$variants === ButtonVariants.Secondary
          ? [Square, SquareSecondary]
          : props.$variants === ButtonVariants.Negative
            ? [Square, SquareNegative]
            : null
      : props.$shape === ButtonShape.Plain
        ? props.$variants === ButtonVariants.Primary
          ? [Plain, PlainPrimary]
          : props.$variants === ButtonVariants.Secondary
            ? [Plain, PlainSecondary]
            : props.$variants === ButtonVariants.Negative
              ? [Plain, PlainNegative]
              : null
        : null}
  &:disabled {
    opacity: 0.75;
  }
`

export default ButtonMain
