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
        set({chartData, data: detailRes.data})

    },

    }))

export default detailStore