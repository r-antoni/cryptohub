import debounce from '@/hooks/useDebounce'
import axios from 'axios'
import { create } from 'zustand'


const searchStore = create((set:any) => ({
    coins: [],
    query: '',

    setQuery: (e:any) => {
        set({query: e.target.value})
        searchStore.getState().searchCoins()
    },

    searchCoins: debounce(
        async () => {
        const {query} = searchStore.getState()
        if (query.length > 2) {
            const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
            const coins = res.data.coins.map((coin:any) => {
            return {
                id: coin.id,
                name: coin.name,
                image: coin.large,
                symbol: coin.symbol
            }
        })
            set({coins})
        }   else(set({coins: []}))  
    }, 500, null
    ),
}))
export default searchStore