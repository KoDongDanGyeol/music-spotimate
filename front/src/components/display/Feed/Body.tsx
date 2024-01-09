"use clinet"

import Link from "next/link"
import styled, { css } from "styled-components"
import { NonUndefined, regexHashtag, regexUrl } from "@/libs/utils"
import Text from "@/components/general/Text"
import Icon from "@/components/general/Icon"

interface FeedBodyProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  lineClamp?: number
  more?: { href?: string }
  hashtag?: { href?: { prefix?: string } }
  extra?: { count?: { comment?: number } }
  children: string
}

const FeedBody = (props: FeedBodyProps) => {
  const { lineClamp = 0, more, hashtag, extra, className = "", children, ...restProps } = props

  return (
    <FeedBodyContainer className={`${className} body`} {...restProps} $lineClamp={lineClamp}>
      <Content className="content">
        {children.split(/([^\s]+)/gi).map((string, index) => {
          if (regexUrl.test(string)) {
            return (
              <Link key={index} href={`${string}`} className="url">
                {string}
              </Link>
            )
          }
          if (regexHashtag.test(string)) {
            return (
              <Link key={index} href={`${hashtag?.href?.prefix}${string.slice(1)}`} className="hashtag">
                {string}
              </Link>
            )
          }
          return <span key={index}>{string}</span>
        })}
      </Content>
      {extra?.count && (
        <Count>
          {extra?.count?.comment?.toString() && (
            <Text as="span" size="sm">
              <Icon name="ChatBubbleOvalLeftEllipsis" aria-hidden="true" />
              <strong className="sr-only">댓글</strong>
              <em>{extra?.count?.comment <= 999 ? extra?.count?.comment?.toString() : "999+"}</em>
            </Text>
          )}
        </Count>
      )}
      {more?.href && (
        <More href={`${more?.href}`}>
          <span className="sr-only">더보기</span>
        </More>
      )}
    </FeedBodyContainer>
  )
}

interface FeedBodyStyled {
  $lineClamp: NonUndefined<FeedBodyProps["lineClamp"]>
}

const LineClamp = css<FeedBodyStyled>`
  display: -webkit-box;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  max-height: ${(props) => `${props.theme.typo.leading.base * props.$lineClamp}em`};
  -webkit-line-clamp: ${(props) => props.$lineClamp};
  -webkit-box-orient: vertical;
`

const Content = styled.p`
  font-size: ${(props) => props.theme.typo.size.base};
  line-height: ${(props) => props.theme.typo.leading.base};
  span {
    white-space: pre-wrap;
  }
  .hashtag,
  .url {
    position: relative;
    color: hsl(var(--color-blue900));
    z-index: 1;
    &:is(a):hover,
    &:is(a):focus {
      text-decoration: underline;
      outline: none;
    }
  }
`

const Count = styled.div`
  &:empty {
    display: none;
  }
  margin-top: 12px;
  display: flex;
  gap: 12px;
  color: hsl(var(--color-gray600));
  span {
    display: inline-flex;
    gap: 4px;
    svg {
      width: 20px;
    }
  }
`

const More = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
`

const FeedBodyContainer = styled.div<FeedBodyStyled>`
  position: relative;
  margin-top: 12px;
  .content {
    ${(props) => (props.$lineClamp ? LineClamp : null)}
  }
`

export default FeedBody
