import AvatarMain from "@/components/display/Avatar/Main"
import AvatarGroup from "@/components/display/Avatar/Group"
import AvatarStack from "@/components/display/Avatar/Stack"

export const AvatarShape = {
  Circle: "circle",
  Square: "square",
} as const

export type AvatarShape = (typeof AvatarShape)[keyof typeof AvatarShape]

export const AvatarSize = {
  XS: "xs",
  SM: "sm",
  BASE: "base",
  LG: "lg",
  XL: "xl",
} as const

export type AvatarSize = (typeof AvatarSize)[keyof typeof AvatarSize]

export default Object.assign(AvatarMain, {
  Group: AvatarGroup,
  Stack: AvatarStack,
})
