"use client"

import Link from "next/link"
import styled from "styled-components"
import useMount from "@/libs/hook/useMount"
import useTheme from "@/libs/hook/useTheme"

export interface HeaderMainProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
  routeSegment: "document" | "service"
}

const HeaderMain = (props: HeaderMainProps) => {
  const { routeSegment, className = "", children, ...restProps } = props

  const {
    mountStructure: { isMounted },
  } = useMount()
  const {
    themeStructure: { isPressedTheme },
    toggleTheme,
  } = useTheme()

  return (
    <HeaderMainContainer className={`${className}`} {...restProps}>
      <Logo>
        <Link href={routeSegment === "document" ? `/guide` : `/feed`} passHref>
          Spotimate
        </Link>
      </Logo>
      <Menu>{children}</Menu>
      <Theme>
        {isMounted ? (
          <button type="button" aria-pressed={isPressedTheme} aria-label="다크 모드 전환" onClick={toggleTheme}>
            {`Theme${isPressedTheme ? "🌜" : "🌞"}`}
          </button>
        ) : (
          <span>Theme🔥</span>
        )}
      </Theme>
    </HeaderMainContainer>
  )
}

const Logo = styled.h1`
  margin: 0 -24px;
  a {
    display: flex;
    align-items: center;
    height: 64px;
    padding: 0 24px;
  }
  @media ${(props) => props.theme.screen.device.md} {
    margin: 0 -16px;
    a {
      padding: 0 16px;
    }
  }
`

const Menu = styled.div`
  /*  */
`

const Theme = styled.div`
  button {
    vertical-align: top;
  }
`

const HeaderMainContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  column-gap: 24px;
  row-gap: 24px;
  padding: 0 24px;
  width: 240px;
  height: 100vh;
  background: hsl(var(--color-gray100));
  border-right: 1px solid hsl(var(--color-gray300));
  overflow-y: auto;
  z-index: 100;
  @media ${(props) => props.theme.screen.device.md} {
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 0 16px;
    border-right: none;
    border-bottom: 1px solid hsl(var(--color-gray300));
    overflow-y: inherit;
  }
`

export default HeaderMain
