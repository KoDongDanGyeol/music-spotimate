"use client"

import styled from "styled-components"
import { NonUndefined } from "@/libs/utils"
import Picture from "@/components/display/Picture"
import Text from "@/components/general/Text"
import { PictureMainProps } from "@/components/display/Picture/Main"
import { AvatarShape, AvatarSize } from "@/components/display/Avatar"

export interface AvatarMainProps extends React.HTMLAttributes<HTMLDivElement> {
  shape?: AvatarShape
  size?: AvatarSize
  name?: string
  picture: Pick<PictureMainProps, "src" | "text">
}

const AvatarMain = (props: AvatarMainProps) => {
  const { shape = AvatarShape.Circle, size = AvatarSize.BASE, name, picture, className = "", ...restProps } = props

  return (
    <AvatarContainer className={`${className} avatar`} $shape={shape} $size={size} {...restProps}>
      <Picture alt="" icon="UserCircle" ratio={[1, 1]} src={picture?.src} priority={true} text={picture?.text} />
      {name && <Text className="name">{name}</Text>}
    </AvatarContainer>
  )
}

interface AvatarMainStyled {
  $shape: NonUndefined<AvatarMainProps["shape"]>
  $size: NonUndefined<AvatarMainProps["size"]>
}

const AvatarContainer = styled.div<AvatarMainStyled>`
  position: relative;
  width: ${(props) =>
    props.$size === AvatarSize.XS
      ? "24px"
      : props.$size === AvatarSize.SM
        ? "32px"
        : props.$size === AvatarSize.BASE
          ? "40px"
          : props.$size === AvatarSize.LG
            ? "48px"
            : props.$size === AvatarSize.XL
              ? "56px"
              : ""};
  font-size: ${(props) => props.theme.typo.size[props.$size]};
  line-height: ${(props) => props.theme.typo.leading[props.$size]};
  .picture {
    overflow: hidden;
    border-radius: ${(props) =>
      props.$shape === AvatarShape.Circle ? "100%" : props.$shape === AvatarShape.Square ? "6px" : ""};
  }
  .name {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: block;
    font-size: ${(props) => props.theme.typo.size.sm};
    line-height: ${(props) => props.theme.typo.leading[props.$size]};
    text-align: center;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export default AvatarMain
