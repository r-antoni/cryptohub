"use client"
import useAxios from '@/hooks/useAxios'
import TrendingCoin from './trending-coin'
import TrendingNFT from './trending-nft'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import TrendingCategories from './trending-categories'



const Trending = () => {
    const {response} = useAxios("https://api.coingecko.com/api/v3/search/trending")

  return (
    <div className='grid-cols-2 justify-center'>
        {/* Trending Coins */}
        <Card>
        <CardHeader>
          <CardTitle>Trending Coins</CardTitle>
          <CardDescription>Latest trending coin in the last 24H</CardDescription>
        </CardHeader>
        <CardContent>
        {response && response.coins.map((coin:any) => 
                <TrendingCoin key={coin.item.coin_id} coin={coin.item} />
            )}
        </CardContent>
      </Card>
      {/* Trending NFTs */}
      <Card>
        <CardHeader>
          <CardTitle>Trending Coins</CardTitle>
          <CardDescription>Latest trending NFTs in the last 24H</CardDescription>
        </CardHeader>
        <CardContent>
        {response && response.nfts.map((nft:any) => 
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
        {response && response.categories.map((cat:any) => 
                <TrendingCategories key={cat.id} cat={cat} />
            )}
        </CardContent>
      </Card>
  
    </div>
  )
}

export default Trending