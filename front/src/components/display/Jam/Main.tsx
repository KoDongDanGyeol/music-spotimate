import { useRef, useState } from "react"
import useMount from "@/libs/hook/useMount"
import { Timer, clearTimer, setTimer } from "@/libs/timer"

export interface JamMainProps extends React.HTMLAttributes<HTMLDivElement> {
  delay: number
}

const JamMain = (props: JamMainProps) => {
  const { delay = 500, className = "", ...restProps } = props

  const [isVisible, setIsVisible] = useState(false)
  const timers = useRef<Timer>({ delay: null })
  const {
    mountStructure: { isMounted },
  } = useMount(() => {
    ;(async () => {
      clearTimer(timers, { key: "delay" })
      await setTimer(timers, { key: "delay", delay })
      setIsVisible(true)
    })()
  }, [])

  const jamError = () => {
    throw new Error("Error!")
  }

  return <>{isMounted && isVisible && <div className={`${className} ${jamError()}`} {...restProps} />}</>
}

export default JamMain
