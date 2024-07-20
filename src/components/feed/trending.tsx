"use client"
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
import datafeedStore from '@/lib/stores/datafeedStore'


const Trending = () => {
  const store = datafeedStore()

  useEffect (()=>{
    store.fetchTrending()
    }, [])

  return (
    <section className='grid grid-rows-2 grid-flow-col gap-5'>
        {/* Trending Coins */}
        <div className='row-span-3'>
          <Card>
            <CardHeader>
              <CardTitle>Trending Coins</CardTitle>
              <CardDescription>Discover the top trending cryptocurrencies on Cryptohub. This list is sorted by coins that are most searched for in the last 3 hours. </CardDescription>
            </CardHeader>
            <CardContent>
            {store.coins.map((coin:any) => 
                    <TrendingCoin key={coin.coin_id} coin={coin} />
                )}
            </CardContent>
          </Card>
        </div>

        {/* Trending NFTs */}
        <div className='col-span-1'>
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
        </div>

        {/* Trending Categories */}
        <div className='row-span-2 col-span-1'>
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
    </section>
  )
}

export default Trending