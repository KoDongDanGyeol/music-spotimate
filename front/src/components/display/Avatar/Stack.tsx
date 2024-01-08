"use client"

import { Children, useEffect, useState } from "react"
import styled from "styled-components"
import { getChildProps } from "@/libs/utils"
import AvatarMain, { AvatarMainProps } from "@/components/display/Avatar/Main"

export interface AvatarStackProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  maxCount?: number
}

const AvatarStack = (props: AvatarStackProps) => {
  const { maxCount, className = "", children, ...restProps } = props

  const [copiedProps, setCopiedProps] = useState(() =>
    getChildProps<typeof AvatarMain, AvatarMainProps>(children, AvatarMain),
  )

  useEffect(() => {
    setCopiedProps(() => getChildProps<typeof AvatarMain, AvatarMainProps>(children, AvatarMain))
  }, [children])

  return (
    <AvatarStackContainer className={`${className}`} {...restProps}>
      {Children.toArray(children).filter((child, index) => !(maxCount && maxCount <= index))}
      {maxCount && maxCount < Children.count(children) && (
        <AvatarMain {...(copiedProps ?? {})} picture={{ src: ``, text: `+${Children.count(children) - maxCount}` }} />
      )}
    </AvatarStackContainer>
  )
}

const AvatarStackContainer = styled.div`
  display: inline-flex;
  > * ~ * {
    margin-left: -0.55em;
  }
  .picture {
    box-shadow: hsl(var(--color-gray100)) 0px 0px 0px 2px;
  }
`

export default AvatarStack
