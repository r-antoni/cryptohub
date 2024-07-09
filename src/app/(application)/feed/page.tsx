import DefiMarket from '@/components/feed/defi-market'
import GlobalMarket from '@/components/feed/global-market'
import Trending from '@/components/feed/trending'

type Props = {}

const Feed = (props: Props) => {
  return (
    <>
      Feed
      <section>
        <Trending />
      </section>
      <section>
        <GlobalMarket />
        <DefiMarket />
      </section>   
    </>
  )
}

export default Feed