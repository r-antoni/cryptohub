import axios from 'axios'
import { create } from 'zustand'
import moment from "moment";


const marketStore = create((set:any) => ({
    marketCoins: [],
    chartData: [],
    data: null,
    preview: [],

    fetchMarket: async () => {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&price_change_percentage=24h&precision=2")
        
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
    },

    fetchData: async (id:any) => {
        const [chartRes, detailRes] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        ])
        
        const chartData = chartRes.data.prices.map((price: any) => {
            const [timestamp, p] = price;
            const date = moment(timestamp).format("MMM DD")

            return {
                date: date,
                price: p,
            }
        })
        set({chartData, data: detailRes.data})
    },

    fetchPreview: async () => {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&price_change_percentage=24h&precision=2")
        
        const preview = res.data.map((coin:any) => {
            return{
                id: coin.id,
                rank: coin.market_cap_rank,
                name: coin.name,
                image: coin.image,
                change: coin.price_change_percentage_24h,
                price: coin.current_price,
                mcap: coin.market_cap,
                volume: coin.total_volume
            }
        })
        set({preview})
    },
}))

export default marketStore