import Markets from '@/components/feed/markets'
import Trending from '@/components/feed/trending'

type Props = {}

const Feed = (props: Props) => {
  return (
    <div>
      Feed
      <Trending />
      <Markets />
    </div>
  )
}

export default Feed