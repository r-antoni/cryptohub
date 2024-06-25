import axios from 'axios'
import { create } from 'zustand'

const detailStore = create((set:any) => ({
    fetchData: async (id:any) => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
    console.log(res)
    },
    
    }))

export default detailStore