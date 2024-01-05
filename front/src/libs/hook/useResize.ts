import { useEffect, useRef, useState } from "react"

const useResize = () => {
  const observer = useRef<ResizeObserver | null>(null)
  const [structure, setStructure] = useState<{
    width: number
    height: number
    windowInnerWidth: number
    windowInnerHeight: number
  }>(() => ({
    width: 0,
    height: 0,
    windowInnerWidth: 0,
    windowInnerHeight: 0,
  }))

  const resetStructure = () => {
    setStructure(() => ({
      width: 0,
      height: 0,
      windowInnerWidth: 0,
      windowInnerHeight: 0,
    }))
  }

  const updateObserver = () => {
    if (!document?.body) return
    const io = new ResizeObserver(([entry]) => {
      setStructure((prev) => ({
        ...prev,
        width: entry.contentRect.width,
        height: entry.contentRect.height,
        windowInnerWidth: window.innerWidth,
        windowInnerHeight: window.innerHeight,
      }))
    })
    io.observe(document.body)
    observer.current = io
  }

  const removeObserver = () => {
    if (!observer?.current) return
    observer?.current?.disconnect()
    resetStructure()
  }

  useEffect(() => {
    updateObserver()
    return () => {
      removeObserver()
    }
  }, [])

  return {
    resizeObserver: observer,
    resizeStructure: structure,
  }
}

export default useResize
