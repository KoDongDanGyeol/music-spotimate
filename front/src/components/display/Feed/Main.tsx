"use clinet"

import styled from "styled-components"

interface FeedMainProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  //
}

const FeedMain = (props: FeedMainProps) => {
  const { className = "", children, ...restProps } = props

  return (
    <FeedMainContainer className={`${className}`} {...restProps}>
      {children}
    </FeedMainContainer>
  )
}

const FeedMainContainer = styled.div`
  /*  */
`

export default FeedMain
