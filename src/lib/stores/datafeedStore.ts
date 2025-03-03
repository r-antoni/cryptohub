import axios from 'axios'
import { create } from 'zustand'

const datafeedStore = create((set:any) => ({
    coins: [],
    nfts: [],
    categories: [],
    global: null,
    defi: null,
    
    fetchTrending: async () => {
        const res = await axios.get("https://api.coingecko.com/api/v3/search/trending")
            
        const coins = res.data.coins.map((coin:any) => {
            return {
                id: coin.item.id,
                name: coin.item.name,
                image: coin.item.large,
                price: coin.item.data.price,
                change: coin.item.data.price_change_percentage_24h.usd,
                chart: coin.item.data.sparkline
            }
        })

        const nfts = res.data.nfts.map((nft:any) => {
            return {
                id: nft.id,
                name: nft.name,
                image: nft.thumb,
                price: nft.data.floor_price,
                change: nft.floor_price_24h_percentage_change,
                chart: nft.data.sparkline
            }
                   
        })

        const categories = res.data.categories.map((cat:any) => {
            return {
                id: cat.id,
                name: cat.name,
                marketcap: cat.data.market_cap,
                volume: cat.data.total_volume,
                change: cat.data.market_cap_change_percentage_24h.usd,
                chart: cat.data.sparkline
            }
        })
        set({coins, nfts, categories})
    },

    fetchGlobal: async () => {
        const [marketRes, defiRes] = await Promise.all([
            axios.get("https://api.coinlore.net/api/global/"), 
            axios.get("https://api.coingecko.com/api/v3/global/decentralized_finance_defi")
        ])
        set({global:marketRes.data[0], defi:defiRes.data.data})
    }
}))

export default datafeedStore