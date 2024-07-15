"use client"

import marketStore from "@/lib/stores/marketStore"
import { useEffect } from "react"
import Coin from "./coin"


const Markets = () => {
    const store = marketStore()

    useEffect(() => {
        store.fetchMarket()
    },[])

  return (
    <section className='mt-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-3'>
            <span>Name</span> 
            <span>24H High</span>
            <span>24H Low</span>
            <span className='invisible md:visible'>24H Change</span>
            <span>Current Price</span>
            <span className='invisible xl:visible'>Market Cap</span>
            <span>Volume</span>
        </div>
        <div>
            {store.marketCoins.map((coin:any) => 
                <Coin key={coin.id} coin={coin}/>
            )}
        </div>
    </section>
  )
}

export default Markets