"use client"

import { useState } from "react"
import styled from "styled-components"
import { ObjectEntries, ObjectKeys } from "@/libs/utils"
import Document from "@/components/display/Document"
import Button from "@/components/general/Button"
import Text from "@/components/general/Text"
import { colorDark, colorLight } from "@/styles/theme/color"

const Color = {
  All: "all",
  Gray: "gray",
  Red: "red",
  Orange: "orange",
  Blue: "blue",
  Green: "green",
} as const

type Color = (typeof Color)[keyof typeof Color]

const Page = () => {
  const [color, setColor] = useState<Color>(() => Color.All)
  const chips = [
    ...new Set([
      ...(Object.keys(colorDark) as ObjectKeys<typeof colorDark>),
      ...(Object.keys(colorLight) as ObjectKeys<typeof colorLight>),
    ]),
  ]

  return (
    <>
      <Document layout="overview">
        <Document.Headline>Color</Document.Headline>
      </Document>

      <Document layout="example">
        <Document.Headline>Theme Palette</Document.Headline>
        <Document.Preview>
          <ColorExample>
            <ColorSwitch>
              {(Object.entries(Color) as ObjectEntries<typeof Color>).map(([name, value]) => (
                <li key={name}>
                  <Button
                    type="button"
                    emphasis={value === color ? "subtle" : "minimal"}
                    shape="square"
                    variants="secondary"
                    onClick={() => setColor(() => Color[name])}
                  >
                    {name}
                  </Button>
                </li>
              ))}
            </ColorSwitch>
            <ColorView>
              {chips
                .filter((colorKey) => {
                  if (color === Color.All) return true
                  const regexp = new RegExp(`^${color}`)
                  return regexp.test(colorKey)
                })
                .map((colorKey) => (
                  <li key={colorKey}>
                    <div className="color" style={{ background: `hsl(var(--color-${colorKey}))` }} />
                    <Text size="sm">--color-{colorKey}</Text>
                  </li>
                ))}
            </ColorView>
          </ColorExample>
        </Document.Preview>
      </Document>
    </>
  )
}

const ColorSwitch = styled.ul`
  display: flex;
  gap: 8px;
`

const ColorView = styled.ul`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  .color:before {
    content: "";
    display: block;
    width: 100%;
    height: 0;
    padding-top: 40%;
  }
  @media ${(props) => props.theme.screen.device.lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const ColorExample = styled.div`
  ${ColorSwitch} + ${ColorView} {
    margin-top: 12px;
  }
`

export default Page
