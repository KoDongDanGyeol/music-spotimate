"use client"

import { Fragment, useEffect, useMemo } from "react"
import { useRecoilState } from "recoil"
import { atomGlobal } from "@/stores/global"
import { ObjectEntries, isEquals } from "@/libs/utils"
import useResize from "@/libs/hook/useResize"
import { ScreenSize, screenSize } from "@/styles/theme/screen"

interface LayoutProviderProps extends React.PropsWithChildren {
  //
}

const LayoutProvider = (props: LayoutProviderProps) => {
  const { children } = props

  const {
    resizeStructure: { windowInnerWidth },
  } = useResize()
  const [global, setGlobal] = useRecoilState(atomGlobal)

  const currentScreen = useMemo<(keyof ScreenSize)[]>(() => {
    const result = [] as (keyof ScreenSize)[]
    const sizes = Object.entries(screenSize) as ObjectEntries<typeof screenSize>
    sizes.sort(([, a], [, b]) => parseInt(a) - parseInt(b))
    if (windowInnerWidth === 0) {
      return result
    }
    for (const [key, value] of sizes) {
      result.push(key)
      if (windowInnerWidth <= parseInt(value)) break
    }
    return result
  }, [windowInnerWidth])

  useEffect(() => {
    if (isEquals(global.screen, currentScreen)) return
    setGlobal((prev) => ({
      ...prev,
      screen: currentScreen,
    }))
  }, [currentScreen, global.screen, setGlobal])

  return <Fragment>{children}</Fragment>
}

export default LayoutProvider
