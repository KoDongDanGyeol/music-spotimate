import { useRecoilState } from "recoil"
import { Theme, atomTheme } from "@/stores/theme"

const UseTheme = () => {
  const [theme, setTheme] = useRecoilState(atomTheme)

  const toggleTheme = () => {
    setTheme((value) => (value === Theme.Light ? Theme.Dark : Theme.Light))
  }

  return {
    themeStructure: {
      isPressedTheme: !(theme === Theme.Light),
      theme,
    },
    toggleTheme,
  }
}

export default UseTheme
