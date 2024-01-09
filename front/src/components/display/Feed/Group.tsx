"use clinet"

import styled from "styled-components"

interface FeedGroupProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLUListElement>> {
  //
}

const FeedGroup = (props: FeedGroupProps) => {
  const { className = "", children, ...restProps } = props

  return (
    <FeedGroupContainer className={`${className}`} {...restProps}>
      {children}
    </FeedGroupContainer>
  )
}

const FeedGroupContainer = styled.ul`
  li + li {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid hsl(var(--color-gray300));
  }
`

export default FeedGroup
