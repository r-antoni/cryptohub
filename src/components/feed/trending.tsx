"use client"
import useAxios from '@/hooks/useAxios'
import TrendingCoin from './trending-coin'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TrendingNFT from './trending-nft'
import TrendingCat from './trending-cat'


const Trending = () => {
    const {response} = useAxios("https://api.coingecko.com/api/v3/search/trending")

  return (
    <Tabs defaultValue='coin' className="w-[1000px]">
        <TabsList>
            <TabsTrigger value='coin'>Trending Coins</TabsTrigger>
            <TabsTrigger value='nft'>Trending NFTs</TabsTrigger>
            <TabsTrigger value='cat'>Trending Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="coin">
            {response && response.coins.map((coin:any) => 
                <TrendingCoin key={coin.item.coin_id} coin={coin.item} />
            )}
        </TabsContent>
        <TabsContent value="nft">
        {response && response.nfts.map((nft:any) => 
                <TrendingNFT key={nft.id} nft={nft} />
            )}
        </TabsContent>
        <TabsContent value="cat">
        {response && response.categories.map((cat:any) => 
            <TrendingCat key={cat.id} cat={cat} />
            )}
        </TabsContent>
    </Tabs>
  )
}

export default Trending