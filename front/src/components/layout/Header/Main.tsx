"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRecoilState } from "recoil"
import styled from "styled-components"
import { atomGlobal } from "@/stores/global"
import { Timer, clearTimer, setTimer } from "@/libs/timer"
import useMount from "@/libs/hook/useMount"
import useTheme from "@/libs/hook/useTheme"
import useFocusTrap from "@/libs/hook/useFocusTrap"
import Icon from "@/components/general/Icon"

export interface HeaderMainProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
  routeSegment: "document" | "service"
}

const HeaderMain = (props: HeaderMainProps) => {
  const { routeSegment, className = "", children, ...restProps } = props

  const pathname = usePathname()
  const timers = useRef<Timer>({ delay: null })
  const [global, setGlobal] = useRecoilState(atomGlobal)
  const [header, setHeader] = useState<{ isHeaderVisibled: boolean }>(() => ({
    isHeaderVisibled: false,
  }))

  const {
    mountStructure: { isMounted },
  } = useMount()
  const {
    themeStructure: { isPressedTheme },
    toggleTheme,
  } = useTheme()
  const {
    focusTrapRefs: { containerRef, returnRef },
    onActivate,
    onDeactivate,
  } = useFocusTrap(false, [["Escape", () => toggleSidebar(false)]])

  const toggleSidebar = useCallback(
    async (isActive: boolean) => {
      if (isActive) {
        document.body.classList.add("header-opened")
        setGlobal((prev) => ({ ...prev, isHeaderOpened: isActive }))
        clearTimer(timers, { key: "delay" })
        await setTimer(timers, { key: "delay", delay: 0 })
        setHeader((prev) => ({ ...prev, isHeaderVisibled: isActive }))
        onActivate()
        return
      }
      document.body.classList.remove("header-opened")
      setHeader((prev) => ({ ...prev, isHeaderVisibled: isActive }))
      clearTimer(timers, { key: "delay" })
      await setTimer(timers, { key: "delay", delay: 300 })
      setGlobal((prev) => ({ ...prev, isHeaderOpened: isActive }))
      onDeactivate()
    },
    [onActivate, onDeactivate, setGlobal],
  )

  useEffect(() => {
    toggleSidebar(false)
  }, [pathname, toggleSidebar])

  useEffect(() => {
    document.body.classList.remove("header-opened")
    setGlobal((prev) => ({ ...prev, isHeaderOpened: false }))
    setHeader((prev) => ({ ...prev, isHeaderVisibled: false }))
  }, [global.screen, setGlobal])

  return (
    <HeaderMainContainer className={`${className}`} {...restProps}>
      <Logo>
        <Link href={routeSegment === "document" ? `/guide` : `/feed`} passHref>
          Spotimate
        </Link>
      </Logo>
      <Control>
        <Hamburger
          type="button"
          ref={returnRef}
          onClick={() => {
            toggleSidebar(true)
          }}
        >
          <Icon name="BarsBottomRight" aria-hidden="true" />
          <span className="sr-only">전체 메뉴 열기</span>
        </Hamburger>
      </Control>
      <Sidebar
        ref={containerRef}
        className={`${global.isHeaderOpened ? "opened" : ""} ${header.isHeaderVisibled ? "visibled" : ""}`}
        onClick={(event) => {
          if (event.target === containerRef.current) {
            toggleSidebar(false)
          }
        }}
      >
        <Navigation>
          <Home>
            <Link href={routeSegment === "document" ? `/guide` : `/feed`} passHref>
              Spotimate
            </Link>
          </Home>
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
          <Close
            type="button"
            onClick={() => {
              toggleSidebar(false)
            }}
          >
            <Icon name="XMark" aria-hidden="true" />
            <span className="sr-only">전체 메뉴 닫기</span>
          </Close>
        </Navigation>
      </Sidebar>
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

const Hamburger = styled.button`
  display: none;
  @media ${(props) => props.theme.screen.device.md} {
    display: block;
    margin: -10px;
    padding: 10px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`

const Control = styled.div`
  display: none;
  @media ${(props) => props.theme.screen.device.md} {
    margin-left: auto;
    display: flex;
    gap: 12px;
  }
`

const Home = styled.strong`
  display: none;
  @media ${(props) => props.theme.screen.device.md} {
    display: block;
    font-weight: 700;
    a {
      display: flex;
      align-items: center;
      height: 24px;
    }
  }
`

const Menu = styled.div`
  ul,
  li {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  > ul {
    margin: 0 -8px;
    ul {
      padding-left: 16px;
    }
    a {
      display: block;
      padding: 8px;
      font-size: ${(props) => props.theme.typo.size.sm};
      line-height: ${(props) => props.theme.typo.leading.normal};
      border-radius: 6px;
      &:hover,
      &:focus {
        color: hsla(var(--color-blue900), 90%);
        background: hsla(var(--color-blue900), 20%);
      }
      &.active {
        font-weight: 700;
        color: hsla(var(--color-blue900), 90%);
        background: hsla(var(--color-blue900), 20%);
      }
    }
  }
`

const Theme = styled.div`
  margin: auto -24px 0;
  padding: 12px 24px;
  button {
    vertical-align: top;
  }
`

const Close = styled.button`
  display: none;
  @media ${(props) => props.theme.screen.device.md} {
    position: fixed;
    top: 11px;
    right: 14px;
    display: block;
    padding: 10px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`
const Navigation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  flex: 1 1 0%;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  ${Navigation} {
  }
  @media ${(props) => props.theme.screen.device.md} {
    position: fixed;
    top: 0;
    right: 0;
    display: none;
    width: 100%;
    height: 100vh;
    align-items: flex-end;
    ${Navigation} {
      width: 100%;
      max-width: 320px;
      padding: 64px 24px 0;
      background: hsl(var(--color-gray100));
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);
      overflow-y: auto;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: hsla(var(--color-gray900), 80%);
      opacity: 0;
      transition: opacity 0.3s;
      z-index: -1;
      :root[data-theme="dark"] & {
        background: hsla(var(--color-gray50), 80%);
      }
    }
    &.opened {
      display: flex;
    }
    &.visibled:after {
      opacity: 1;
    }
    &.visibled ${Navigation} {
      transform: translateX(0px);
      will-change: auto;
    }
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
