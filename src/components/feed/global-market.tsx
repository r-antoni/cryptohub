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
        </section>
        {/* DeFi Market */}
        <section>
            wwwww
            
        </section>
    </>
  )
}

export default GlobalMarket