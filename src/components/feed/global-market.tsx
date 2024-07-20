"use client"

import datafeedStore from "@/lib/stores/datafeedStore"
import { useEffect } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { currencyFormat } from "@/lib/utils/currency"
import { percentageFormat } from "@/lib/utils/percentage"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



const GlobalMarket = () => {
    const store = datafeedStore((state:any)=> state)
    useEffect(()=>{
        store.fetchGlobal()
    },[])
    return (
    <section className="flex flex-col justify-center items-center gap-10 pb-5">
        {/* Global Market Data */}
        {store.global && 
        <div className="grid grid-cols-2 gap-20">    
            <div>
                <Card>
                    <CardHeader>
                    <CardTitle>Total Market Cap</CardTitle>
                    <CardDescription>Total crypto market cap, sum of all coins marketcap.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {currencyFormat(store.global.total_mcap)} <span>{percentageFormat(parseFloat(store.global.mcap_change))}</span>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card>
                    <CardHeader>
                    <CardTitle>Total Volume</CardTitle>
                    <CardDescription>Total trading volume for last 24h, sum of 24h volume for all crypto coins.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {currencyFormat(store.global.total_volume)} <span>{percentageFormat(parseFloat(store.global.volume_change))}</span>
                    </CardContent>
                </Card>
            </div>
        </div>
        }        
        {/* Global Defi Data */}
        {store.defi && 
        <div className="">
            <Tabs defaultValue="defi" className="flex flex-col items-center justify-center bg-slate-200 pb-2 rounded-lg">
            <TabsList>
                <TabsTrigger value="defi">De-Fi Total Market Cap</TabsTrigger>
                <TabsTrigger value="volume">De-Fi Coins 24H Volume</TabsTrigger>
                <TabsTrigger value="dom">De-Fi Dominance</TabsTrigger>
                <TabsTrigger value="btcd">Bitcoin Dominance</TabsTrigger>
                <TabsTrigger value="ethd">Ethereum Dominance</TabsTrigger>
            </TabsList>
            <TabsContent value="defi">{currencyFormat(store.defi.defi_market_cap)}</TabsContent>
            <TabsContent value="volume">{currencyFormat(store.defi.trading_volume_24h)}</TabsContent>
            <TabsContent value="dom">{percentageFormat(store.defi.defi_dominance)}</TabsContent>
            <TabsContent value="btcd">{percentageFormat(store.global?.btc_d)}</TabsContent>
            <TabsContent value="ethd">{percentageFormat(store.global?.eth_d)}</TabsContent>
            </Tabs>
        </div>}
        
    </section>
  )
}

export default GlobalMarket