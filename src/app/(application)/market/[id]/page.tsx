"use client"
import detailStore from "@/lib/stores/detailStore";
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';


const CryptoDetail = () => {
  const store = detailStore()
  const params = useParams()

  useEffect(() => {
  store.fetchData (params.id)  
  }, [])

  if(!store.data) return <></>
  return (
    <>
      <header>
        <img src={store.data.image.large}  />
        <h2>{store.data.name} ({store.data.symbol})</h2>
      </header>
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
    </>
  )
}

export default CryptoDetail