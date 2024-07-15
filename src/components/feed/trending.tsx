"use client"
import trendingStore from '@/lib/stores/trendingStore'
import Link from 'next/link'
import { useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import TrendingCategories from './trending-categories'
import TrendingCoin from './trending-coin'
import TrendingNFT from './trending-nft'


const Trending = () => {
  const store = trendingStore((state:any)=> state)

  useEffect (()=>{
    store.fetchTrending()
    }, [])

  return (
    <div className='grid-cols-2 justify-center'>
        {/* Trending Coins */}
        <Card>
        <CardHeader>
          <CardTitle>Trending Coins</CardTitle>
          <CardDescription>Latest trending coin in the last 24H</CardDescription>
        </CardHeader>
        <CardContent>
        {store.coins.map((coin:any) => 
                <TrendingCoin key={coin.coin_id} coin={coin} />
            )}
        </CardContent>
      </Card>
      {/* Trending NFTs */}
      <Card>
        <CardHeader>
          <CardTitle>Trending NFTs</CardTitle>
          <CardDescription>Latest trending NFTs in the last 24H</CardDescription>
        </CardHeader>
        <CardContent>
        {store.nfts.map((nft:any) => 
                <TrendingNFT key={nft.id} nft={nft} />
            )}
        </CardContent>
      </Card>
      {/* Trending Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Trending Categories</CardTitle>
          <CardDescription>Latest trending cryptocurrency categories in the last 24H</CardDescription>
        </CardHeader>
        <CardContent>
        {store.categories.map((cat:any) => 
                <TrendingCategories key={cat.id} cat={cat} />
            )}
        </CardContent>
      </Card>
  
    </div>
  )
}

export default Trending