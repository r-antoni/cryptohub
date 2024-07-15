"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import detailStore from "@/lib/stores/detailStore";
import marketStore from "@/lib/stores/marketStore";
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';


const CryptoDetail = () => {
  const store = marketStore()
  const params = useParams()

  useEffect(() => {
  store.fetchData (params.id)  
  }, [])

  if(!store.data) return <></>
  return (
    <>
      <section className="flex justify-between">
        <div>
          <span>{store.data.market_cap_rank}.</span>
        <img src={store.data.image.small}  />
        <h2>{store.data.name} ({store.data.symbol.toUpperCase()})</h2>
        </div>
        <div>
          <span>{store.data.market_data.current_price.usd}</span>
          <span>{store.data.market_data.price_change_percentage_24h}</span>
        </div>      
      </section>
        <AreaChart
          width={1000}
          height={400}
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
        <section>
          <div className="grid grid-cols-4 grid-rows-2">
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>Website</CardTitle>
                </CardHeader>
                <CardContent>
                  {store.data.links.homepage[0]}
                </CardContent> 
              </Card>   
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>Explorer</CardTitle>
                </CardHeader>
                <CardContent>
                  {store.data.links.blockchain_site[0]}
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
                  {store.data.market_data.ath.usd}
                </CardContent> 
              </Card>
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>All Time Low</CardTitle>
                </CardHeader>
                <CardContent>
                  {store.data.market_data.atl.usd}
                </CardContent> 
              </Card>
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>Market Cap</CardTitle>
                </CardHeader>
                <CardContent>
                  {store.data.market_data.market_cap.usd}
                </CardContent> 
              </Card>
              <Card className="w-auto">
                <CardHeader>
                  <CardTitle>24 Hour Trading Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  {store.data.market_data.total_volume.usd}
                </CardContent> 
              </Card>
          </div>
          <div>
            <p className="mt-5 [&>a]:text-blue-400 [&>a]:underline" dangerouslySetInnerHTML={{ __html: store.data.description.en}}></p>
          </div>
        </section>
    </>
  )
}

export default CryptoDetail