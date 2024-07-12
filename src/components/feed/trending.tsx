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
      <Card>
        <CardHeader>
          <CardTitle>Trending Coins</CardTitle>
          <CardDescription>Latest trending coin in the last 24H</CardDescription>
        </CardHeader>
        <CardContent>
        {response && response.nfts.map((nft:any) => 
                <TrendingNFT key={nft.id} nft={nft} />
            )}
        </CardContent>
      </Card>
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
  
    </div>
  )
}

export default Trending