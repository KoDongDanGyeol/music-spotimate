"use client"

import { useMemo } from "react"
import Link from "next/link"
import styled from "styled-components"
import { toPascal } from "@/libs/utils"
import Button from "@/components/general/Button"

export interface BreadcrumbMainProps extends React.HTMLAttributes<HTMLElement> {
  pathname: string
}

const BreadcrumbMain = (props: BreadcrumbMainProps) => {
  const { pathname, className = "", ...restProps } = props

  const paths = useMemo(() => {
    const [, ...paths] = pathname.split("/")
    return paths.map((_, index) => ({ name: paths[index], currentPath: `/${paths.slice(0, index + 1).join("/")}` }))
  }, [pathname])

  if (!paths.length) {
    return null
  }

  return (
    <BreadcrumbMainContainer aria-label="breadcrumb" className={`${className}`} {...restProps}>
      <ol>
        {paths.map(({ currentPath, name }) => (
          <li key={name}>
            <Link
              href={currentPath}
              aria-current={currentPath === pathname ? "page" : undefined}
              passHref
              legacyBehavior
            >
              <Button as="a" emphasis="minimal" shape="plain" size="sm" variants="secondary">
                {toPascal(name)}
              </Button>
            </Link>
          </li>
        ))}
      </ol>
    </BreadcrumbMainContainer>
  )
}

const BreadcrumbMainContainer = styled.nav`
  ol {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    position: relative;
    &:not(:first-child) {
      padding-left: 36px;
    }
    &:not(:first-child):before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      display: inline-block;
      width: 0.5em;
      height: 0.5em;
      transform: rotate(45deg) translateY(-50%);
      border-top: 1px solid hsl(var(--color-gray400));
      border-right: 1px solid hsl(var(--color-gray400));
    }
    &:not(:last-child) {
      padding-right: 12px;
    }
  }
`

export default BreadcrumbMain
