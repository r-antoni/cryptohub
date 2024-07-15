import axios from 'axios'
import { create } from 'zustand'


const marketStore = create((set:any) => ({
    marketCoins: [],
    fetchMarket: async () => {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&precision=2")
        
        const marketCoins = res.data.map((coin:any) => {
            return{
                id: coin.id,
                rank: coin.market_cap_rank,
                name: coin.name,
                image: coin.image,
                change: coin.price_change_percentage_24h,
                high: coin.high_24h,
                low: coin.low_24h,
                price: coin.current_price,
                mcap: coin.market_cap,
                volume: coin.total_volume
            }
        })
        set({marketCoins})
    }
}))

export default marketStore