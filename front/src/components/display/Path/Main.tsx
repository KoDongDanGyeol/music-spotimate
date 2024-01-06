"use client"

import { Fragment, useMemo } from "react"
import Link from "next/link"
import { toPascal } from "@/libs/utils"
import { Path, PathItem } from "@/app/(document)/path"

export interface PathMainNodeProps {
  activePathname?: string
  childOnly?: boolean
  node: PathItem
  pathname: string
}

export interface PathMainProps extends React.HTMLAttributes<HTMLUListElement> {
  activePathname?: string
  childOnly?: boolean
  pathname: string
}

const PathMainNode = (props: PathMainNodeProps) => {
  const { activePathname, childOnly = true, node, pathname } = props

  const currentPath = `${pathname}/${node.name}`

  return (
    <Fragment>
      <Link href={currentPath} className={`${currentPath === activePathname ? "active" : ""}`} passHref>
        {toPascal(node.name)}
      </Link>
      {node?.leaf && Boolean(node?.leaf?.length) && !childOnly && (
        <ul>
          {node.leaf.map((childNode) => (
            <li key={childNode.name}>
              <PathMainNode
                activePathname={activePathname}
                childOnly={childOnly}
                node={childNode}
                pathname={currentPath}
              />
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  )
}

const PathMain = (props: PathMainProps) => {
  const { activePathname, childOnly = true, pathname, className = "", ...restProps } = props

  const nodes = useMemo<PathItem[]>(() => {
    const [, ...paths] = pathname.split("/")
    const findPath = (nodes: PathItem[], index: number): PathItem[] => {
      if (index === paths.length) return nodes || []
      const childName = paths[index]
      const childNode = (nodes || []).find((node) => node.name === childName)
      return childNode ? findPath(childNode?.leaf ?? [], index + 1) : []
    }
    return findPath(Path, 0)
  }, [pathname])

  if (!nodes.length) {
    return null
  }

  return (
    <ul className={`${className}`} {...restProps}>
      {nodes.map((node) => (
        <li key={node.name}>
          <PathMainNode activePathname={activePathname} childOnly={childOnly} node={node} pathname={pathname} />
        </li>
      ))}
    </ul>
  )
}

export default PathMain
