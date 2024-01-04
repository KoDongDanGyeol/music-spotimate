"use client"

import { useRecoilState } from "recoil"
import { atomFlag } from "@/stores/flag"
import useMount from "@/libs/hook/useMount"

const Page = () => {
  const [flag, setFlag] = useRecoilState(atomFlag)

  const {
    mountStructure: { isMounted },
  } = useMount(() => {
    console.log("mount")
    return () => {
      console.log("unmount")
    }
  })

  return (
    <main>
      {isMounted && (
        <section>
          <span>Recoil atomFlag: {flag.toString()}</span>
          <button type="button" onClick={() => setFlag((value) => !value)}>
            Toggle
          </button>
        </section>
      )}
    </main>
  )
}

export default Page
