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
              <div className='grid grid-cols-3 text-slate-600 py-2'>
                <span className='pl-5'>Name</span>
                <div className='grid grid-cols-2 px-3'>
                  <span>Price</span>
                  <span>24H</span>
                </div>
                <span className='pl-5'>7D Change</span>
              </div>
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
              <CardDescription>Discover the top trending NFTs in all blockchains on Cryptohub. This list is sorted by nfts that are most searched for in the last 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
            <div className='grid grid-cols-3 text-slate-600 py-2'>
                <span className='pl-5'>Name</span>
                <div className='grid grid-cols-2 px-3'>
                  <span>Floor Price</span>
                  <span>24H</span>
                </div>
                <span className='pl-5'>7D Change</span>
              </div>
            {store.nfts.map((nft:any) => 
                    <TrendingNFT key={nft.id} nft={nft} />
                )}
            </CardContent>
          </Card>
        </div>

        {/* Trending Categories */}
        <div className='row-span-2 col-span-1'>
          <Card className='pb-4'>
            <CardHeader>
              <CardTitle>Trending Categories</CardTitle>
              <CardDescription>Latest trending cryptocurrency categories in the last 24H</CardDescription>
            </CardHeader>
            <CardContent>
            <div className='grid grid-cols-4 text-slate-600 py-2 gap-5'>
                <span className='pl-5'>Name</span>
                  <span>Market Cap</span>
                  <span>24H</span>
                <span className='pl-5'>7D Change</span>
              </div>
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