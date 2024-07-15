"use client"

import datafeedStore from "@/lib/stores/datafeedStore"
import { useEffect } from "react"


const GlobalMarket = () => {
    const store = datafeedStore()
    useEffect(()=>{
        store.fetchGlobal()
    },[])

    return (
    <>
        {/* Global Market */}
        <section>
            Hello
            {store.global?.active_markets}
        </section>
        {/* DeFi Market */}
        <section>
            Sup bro
            {store.defi.defi_market_cap}
        </section>
    </>
  )
}

export default GlobalMarket