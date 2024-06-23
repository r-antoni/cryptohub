import debounce from '@/hooks/useDebounce'
import axios from 'axios'
import { create } from 'zustand'

const trendingStore = create((set:any) => ({
    coins: [],
    nfts: [],
    categories: [],
    trendingCoins: [],
    query: '',

    setQuery: (e:any) => {
        set({query: e.target.value})
        trendingStore.getState().searchCoins()
    },

    searchCoins: debounce(
        async () => {
        const {query, trendingCoins} = trendingStore.getState()
        if (query.length > 2) {
            const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
        const coins = res.data.coins.map((coin:any) => {
            return {
                name: coin.name,
                image: coin.large,
                id: coin.id,
                price: coin.item.data.price,
                change: coin.item.data.price_change_percentage_24h.usd,
            }
        })
            set({coins})
        } else {
           set({coins: trendingCoins})
        }     
    }, 500, null
    ),
    
    fetchTrending: async () => {
        const res = await axios.get("https://api.coingecko.com/api/v3/search/trending")
            
        const coins = res.data.coins.map((coin:any) => {
            return {
                id: coin.item.id,
                name: coin.item.name,
                image: coin.item.large,
                price: coin.item.data.price,
                change: coin.item.data.price_change_percentage_24h.usd
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

        set({coins, trendingCoins: coins, nfts, categories})
    }
}))

export default trendingStore