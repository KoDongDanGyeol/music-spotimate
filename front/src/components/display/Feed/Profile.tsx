"use clinet"

import styled from "styled-components"
import Text from "@/components/general/Text"
import Avatar from "@/components/display/Avatar"
import { PictureMainProps } from "@/components/display/Picture/Main"

interface FeedProfileProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  picture: Pick<PictureMainProps, "src" | "text">
  name: React.ReactNode
  date: React.ReactNode
  isFollowed: boolean
}

const FeedProfile = (props: FeedProfileProps) => {
  const { name, date, picture, isFollowed, className = "", children, ...restProps } = props

  return (
    <FeedProfileContainer className={`${className} profile`} {...restProps}>
      <Thumbnail>
        <Avatar size="base" shape="circle" picture={{ src: picture?.src, text: picture?.text }} />
      </Thumbnail>
      <Details>
        <Text as="strong" size="sm" className="name">
          {typeof name === "string" ? <span>{name}</span> : name}
          {isFollowed && <em className="followed">Followed</em>}
        </Text>
        <Text as="span" size="sm" className="date">
          {date}
        </Text>
      </Details>
      {children && <Control>{children}</Control>}
    </FeedProfileContainer>
  )
}

const Thumbnail = styled.div`
  /*  */
`

const Details = styled.div`
  min-width: 0;
  flex: 1 1 0%;
  padding-left: 12px;
  .name {
    display: flex;
    span,
    a {
      font-weight: 700;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .date {
    color: hsl(var(--color-gray600));
  }
  .followed {
    margin-left: 8px;
    font-weight: 700;
    color: hsl(var(--color-blue900));
  }
`

const Control = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const FeedProfileContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`

export default FeedProfile
