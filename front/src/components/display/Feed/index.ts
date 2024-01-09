import FeedMain from "@/components/display/Feed/Main"
import FeedProfile from "@/components/display/Feed/Profile"
import FeedBody from "@/components/display/Feed/Body"
import FeedGroup from "@/components/display/Feed/Group"

export default Object.assign(FeedMain, {
  Profile: FeedProfile,
  Body: FeedBody,
  Group: FeedGroup,
})
