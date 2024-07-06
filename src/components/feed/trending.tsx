"use client"
import useAxios from '@/hooks/useAxios'
import React from 'react'
import TrendingCoin from './trending-coin'

const Trending = () => {
    const {response} = useAxios("search/trending")

  return (
    <div>
        <div>
            Trending Coins
            {response && response.coins.map((coin:any) => 
                <TrendingCoin key={coin.item.coin_id} coin={coin.item} />
            )}
        </div>
        <div>
            {/* Trending NFTs
            {response && response.nfts.map((nft:any) => 
                <TrendingCoin key={nft.id} nft={nft} />
            )} */}
        </div>
        <div></div>
    </div>
  )
}

export default Trending