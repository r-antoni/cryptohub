import DefiMarket from '@/components/feed/defi-market'
import GlobalMarket from '@/components/feed/global-market'
import Trending from '@/components/feed/trending'

type Props = {}

const Feed = () => {
  return (
    <>
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