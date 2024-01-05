"use client"

import { useRecoilState } from "recoil"
import { atomFlag } from "@/stores/flag"
import useMount from "@/libs/hook/useMount"
import useTheme from "@/libs/hook/useTheme"
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
  const {
    themeStructure: { isPressedTheme, theme },
    toggleTheme,
  } = useTheme()

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
      {isMounted && (
        <section>
          <span>Recoil atomTheme ({isPressedTheme ? "pressed" : "not pressed"})</span>
          <button type="button" onClick={() => toggleTheme()}>
            {theme.toString()}
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
