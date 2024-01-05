"use client"

import { useCallback } from "react"
import { RecoilRoot, SetRecoilState } from "recoil"
import { Flag, atomFlag } from "@/stores/flag"
// import Jam from "@/components/display/Jam"

interface RecoilProviderProps extends React.PropsWithChildren {
  flag?: Flag
}

const RecoilProvider = (props: RecoilProviderProps) => {
  const { flag, children } = props

  const initializeState = useCallback(
    ({ set }: { set: SetRecoilState }) => {
      if (flag) set(atomFlag, flag)
    },
    [flag],
  )

  return (
    <RecoilRoot initializeState={initializeState}>
      {children}
      {/* <Jam delay={4000} /> */}
    </RecoilRoot>
  )
}

export default RecoilProvider
