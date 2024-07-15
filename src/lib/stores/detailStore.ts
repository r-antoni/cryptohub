import axios from 'axios'
import { create } from 'zustand'

const detailStore = create((set:any) => ({
    chartData: [],
    data: null,

    fetchData: async (id:any) => {
        const [chartRes, detailRes] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        ])
        
        const chartData = chartRes.data.prices.map((price: any) => {
            const [timestamp, p] = price;
            const date = new Date(timestamp).toLocaleDateString("en-us")

            return {
                date: date,
                price: p,
            }
        })

        // const data = detailRes.data.map((det:any) => {
        //     return {
        //         id: det.id,
        //         rank: det.market_cap_rank,
        //         name: det.name,
        //         symbol: det.symbol,
        //         desc: det.description.en,
        //         web: det.links.homepage[0],
        //         explorer: det.links.blockchain_site[0],
        //         image: det.image.small,
        //         price: det.market_data.current_price.usd,
        //         ath: det.market_data.ath.usd,
        //         athchange: det.market_data.ath_change_percentage.usd,
        //         atl: det.market_data.atl.usd,
        //         atlchange: det.market_data.atl_change_percentage.usd,
        //         athdate: det.market_data.ath_date.usd,
        //         mcap: det.market_data.market_cap.usd,
        //         volume: det.market_data.total_volume.usd,
        //         change: det.market_data.price_change_percentage_24h,
        //     }
        // })
        set({chartData, data: detailRes.data})

    },

    }))

export default detailStore