"use clinet"

import { useEffect, useState } from "react"
import Image, { ImageProps } from "next/image"
import styled, { css } from "styled-components"
import { NonUndefined, isEquals } from "@/libs/utils"
import Icon, { IconName } from "@/components/general/Icon"

export interface PictureMainProps extends ImageProps {
  alt: string
  icon?: keyof typeof IconName
  ratio?: [number, number]
  src: string
  text?: string
  onLoad?: React.ReactEventHandler<HTMLImageElement>
  onError?: React.ReactEventHandler<HTMLImageElement>
}

const PictureMain = (props: PictureMainProps) => {
  const { alt, icon, ratio, src, text, onLoad, onError, ...restProps } = props

  const [structure, setStructure] = useState<{
    isLoaded: boolean
    isErrored: boolean
    src: string | null
  }>({
    isLoaded: false,
    isErrored: false,
    src: src ?? null,
  })

  useEffect(() => {
    setStructure((prev) => ({
      ...prev,
      isLoaded: false,
      isErrored: false,
      src: src ?? null,
    }))
  }, [src])

  return (
    <PictureMainContainer className="picture" $ratio={ratio ?? [0, 0]}>
      {structure.src && !structure.isErrored ? (
        <Image
          fill={true}
          alt={alt}
          sizes="100%"
          src={structure.src}
          onLoad={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
            setStructure((prev) => ({
              ...prev,
              isLoaded: true,
            }))
            onLoad?.(event)
          }}
          onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
            setStructure((prev) => ({
              ...prev,
              isErrored: true,
              src: null,
            }))
            onError?.(event)
          }}
          {...restProps}
        />
      ) : text ? (
        <Fallback>
          <span>{text}</span>
        </Fallback>
      ) : (
        <Fallback>
          <Icon name={icon ?? "Photo"} aria-hidden={true} />
        </Fallback>
      )}
    </PictureMainContainer>
  )
}

interface PictureMainStyled {
  $ratio: NonUndefined<PictureMainProps["ratio"]>
}

const Fallback = styled.div`
  background: hsl(var(--color-gray300));
  span,
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  span {
    display: block;
    width: 100%;
    color: hsl(var(--color-gray700));
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    transform: translate(-50%, -50%) scale(0.85);
  }
  svg {
    width: 50%;
    stroke: hsl(var(--color-gray500));
    transform: translate(-50%, -50%);
  }
`

const Ratio = css<PictureMainStyled>`
  img {
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
  &:before {
    content: "";
    display: block;
    padding-top: ${(props) => (props.$ratio[1] / props.$ratio[0]) * 100}%;
  }
  ${Fallback} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Auto = css`
  img {
    position: relative !important;
    width: 100% !important;
    height: auto !important;
  }
  ${Fallback} {
    position: relative;
    width: 100%;
    height: auto;
    &:before {
      content: "";
      display: block;
      padding-top: 100%;
    }
  }
`

const PictureMainContainer = styled.div<PictureMainStyled>`
  position: relative;
  width: 100%;
  ${(props) => (props.$ratio && !isEquals(props.$ratio, [0, 0]) ? Ratio : Auto)}
`

export default PictureMain
