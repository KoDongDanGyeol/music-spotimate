"use client"

import styled from "styled-components"

export interface FooterMainProps extends React.HTMLAttributes<HTMLElement> {
  //
}

const FooterMain = (props: FooterMainProps) => {
  const { className = "", ...restProps } = props

  return (
    <FooterMainContainer className={`${className}`} {...restProps}>
      <p>Footer</p>
    </FooterMainContainer>
  )
}

const FooterMainContainer = styled.footer`
  padding: 0 32px;
  @media ${(props) => props.theme.screen.device.md} {
    padding: 0 16px;
  }
`

export default FooterMain
