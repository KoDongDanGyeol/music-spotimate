import { DefaultTheme } from "styled-components"
import { colorDark, colorLight } from "@/styles/theme/color"
import { screenDevice, screenSize } from "@/styles/theme/screen"
import { typoLeading, typoSize } from "@/styles/theme/typo"

export const theme: DefaultTheme = {
  color: { dark: colorDark, light: colorLight },
  screen: { device: screenDevice, size: screenSize },
  typo: { leading: typoLeading, size: typoSize },
}
