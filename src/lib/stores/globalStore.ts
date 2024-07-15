import axios from 'axios'
import { create } from 'zustand'

const globalStore = create((set:any) => ({
    global: [],
    defi: [],

    fetchGlobal: async () => {
        const res = await axios.get("https://api.coingecko.com/api/v3/global")
        console.log(res)
    }
}))

export default globalStore