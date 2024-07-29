"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import marketStore from "@/lib/stores/marketStore";
import { currencyFormat } from "@/lib/utils/currency";
import { percentageFormat } from "@/lib/utils/percentage";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const CryptoDetail = () => {
  const store = marketStore((state:any) => state)
  const params = useParams()

  useEffect(() => {
  store.fetchData(params.id)  
  }, [])

  if(!store.data) return <></>
  return (
    <main className="xl:px-20 py-10">
      <section className="flex justify-between">
        <div className="flex items-center gap-5 px-5 xl:px-10">
            <div className="flex items-center gap-3 text-xl font-medium">
            <span>{store.data.market_cap_rank}.</span>
            <Image src={store.data.image.large} alt={store.data.name} width={30} height={30}/>
            <h4>{store.data.name} ({store.data.symbol.toUpperCase()})</h4>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <span>{currencyFormat(store.data.market_data.current_price.usd)}</span>
            <span className={store.data.market_data.price_change_percentage_24h > 0 ? "text-green-400" : "text-red-400"}>{percentageFormat(store.data.market_data.price_change_percentage_24h)}</span>
          </div>    
        </div>
        <div>
          <Link href="/market">
            <Button className="text-xs" size="sm">Go Back</Button>
          </Link> 
        </div>
      </section>

      <section className="w-full h-[200px] xl:h-[400px] px-20 py-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
          data={store.chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>      
        </ResponsiveContainer>        
      </section>
        
        <section>
          <div className="flex flex-col xl:grid grid-cols-4 grid-rows-2 px-10 py-4 gap-5">
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={store.data.links.homepage[0]}>
                  <p className="truncate text-blue-400">
                    {store.data.links.homepage[0]}
                  </p> 
                  </Link> 
                </CardContent> 
              </Card>   
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>Explorer</CardTitle>
                </CardHeader>
                <CardContent>
                <Link href={store.data.links.blockchain_site[0]}>
                  <p className="truncate text-blue-400">
                    {store.data.links.blockchain_site[0]}
                  </p> 
                  </Link> 
                </CardContent> 
              </Card>
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>Circulating Supply</CardTitle>
                </CardHeader>
                <CardContent>
                  {store.data.market_data.circulating_supply}
                </CardContent> 
              </Card>
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>Total Supply</CardTitle>
                </CardHeader>
                <CardContent>
                  {store.data.market_data.total_supply}
                </CardContent> 
              </Card>
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>All Time High</CardTitle>
                </CardHeader>
                <CardContent>
                  {currencyFormat(store.data.market_data.ath.usd)}
                </CardContent> 
              </Card>
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>All Time Low</CardTitle>
                </CardHeader>
                <CardContent>
                  {currencyFormat(store.data.market_data.atl.usd)}
                </CardContent> 
              </Card>
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>Market Cap</CardTitle>
                </CardHeader>
                <CardContent>
                  {currencyFormat(store.data.market_data.market_cap.usd)}
                </CardContent> 
              </Card>
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>24 Hour Trading Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  {currencyFormat(store.data.market_data.total_volume.usd)}
                </CardContent> 
              </Card>
          </div>
          <div>
            <p className="py-5 indent-10 [&>a]:text-blue-400 [&>a]:underline" dangerouslySetInnerHTML={{ __html: store.data.description.en}}></p>
          </div>
        </section>
    </main>
  )
}

export default CryptoDetail