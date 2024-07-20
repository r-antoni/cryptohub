import GlobalMarket from '@/components/feed/global-market'
import Trending from '@/components/feed/trending'

const Feed = () => {
  return (
    <main className='flex flex-col gap-5 px-10 pt-10'>
      <section className='flex flex-col items-center px-3 pb-3'>
        <h2 className='text-3xl font-bold pb-3 underline'>CryptoHub Feed</h2>
        <p className='text-sm text-slate-500'>Curated feed that provides a fundamental analysis of the crypto market. Data provided by Coingecko API</p>
      </section>
      <GlobalMarket />
      <Trending />
    </main>
  )
}

export default Feed