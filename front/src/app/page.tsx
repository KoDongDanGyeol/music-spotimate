"use client"

import { useRecoilState } from "recoil"
import { atomFlag } from "@/stores/flag"
import useMount from "@/libs/hook/useMount"
// import Jam from "@/components/display/Jam"

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
          <span>Recoil atomFlag</span>
          <button type="button" onClick={() => setFlag((value) => !value)}>
            {flag.toString()}
          </button>
        </section>
      )}
      {/* {isMounted && (
        <section>
          <Jam delay={2000} />
        </section>
      )} */}
    </main>
  )
}

export default Page
