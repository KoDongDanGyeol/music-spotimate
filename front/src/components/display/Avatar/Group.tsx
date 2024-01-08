"use client"

import styled from "styled-components"

export interface AvatarGroupProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLUListElement>> {
  //
}

const AvatarGroup = (props: AvatarGroupProps) => {
  const { className = "", children, ...restProps } = props

  return (
    <AvatarGroupContainer className={`${className}`} {...restProps}>
      {children}
    </AvatarGroupContainer>
  )
}

const AvatarGroupContainer = styled.ul`
  margin: 0 -16px;
  padding: 0 calc(16px - 0.4em);
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 0.2em;
  > li {
    flex: 0 0 auto;
  }
  .avatar {
    padding: 0 0.4em 1.2em 0.4em;
    box-sizing: content-box;
  }
`

export default AvatarGroup
