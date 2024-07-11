"use client"
import useAxios from '@/hooks/useAxios'
import TrendingCoin from './trending-coin'
import TrendingNFT from './trending-nft'


const Trending = () => {
    const {response} = useAxios("https://api.coingecko.com/api/v3/search/trending")

  return (
    <div className='grid-cols-2 justify-center'>
        {/* Trending Coins */}
        <div>
        {response && response.coins.map((coin:any) => 
                <TrendingCoin key={coin.item.coin_id} coin={coin.item} />
            )}
        </div>
        {/* Trending NFTs */}
        <div>
        {response && response.nfts.map((nft:any) => 
                <TrendingNFT key={nft.id} nft={nft} />
            )}
        </div>
    </div>
  )
}

export default Trending