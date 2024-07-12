"use client"
import useAxios from '@/hooks/useAxios'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { percentageFormat } from '@/lib/utils/percentage'
import { currencyFormat } from '@/lib/utils/currency'

const GlobalMarket = () => {
    const {response} = useAxios("https://api.coinlore.net/api/global/")
    return (
    <>
    <Tabs defaultValue="marketcap" className="w-[800px]">
        <TabsList>
            <TabsTrigger value="marketcap">Total Marketcap</TabsTrigger>
            <TabsTrigger value="volume">Total Volume 24H</TabsTrigger>
            <TabsTrigger value="btcd">Bitcoin Dominance</TabsTrigger>
            <TabsTrigger value="ethd">Ethereum Dominance</TabsTrigger>
        </TabsList>
        <TabsContent value="marketcap">
            <div>
                {currencyFormat(parseFloat(response?.[0].total_mcap))}
                {percentageFormat(parseFloat(response?.[0].mcap_change))}
            </div>
        </TabsContent>
        <TabsContent value="volume">
            <div>
                {currencyFormat(parseFloat(response?.[0].total_volume))}
                {percentageFormat(parseFloat(response?.[0].volume_change))}
            </div>   
        </TabsContent>
        <TabsContent value="btcd">
            {percentageFormat(parseFloat(response?.[0].btc_d))}
        </TabsContent>
        <TabsContent value="ethd">
            {percentageFormat(parseFloat(response?.[0].eth_d))}
        </TabsContent>
    </Tabs>
    </>
  )
}

export default GlobalMarket