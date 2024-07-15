"use client"
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
          width={500}
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
          <div>
            
          </div>
          <div></div>
        </section>
    </>
  )
}

export default CryptoDetail