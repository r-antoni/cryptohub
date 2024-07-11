"use client"

import useAxios from "@/hooks/useAxios"
import { useParams } from "next/navigation"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CoinChart = () => {
  const {id} = useParams()
  const {response} = useAxios(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`)
  const chartData = response?.prices.map(value => ({x: value[1], y: value[0]}))
  return (
    <div className="w-[1000px] h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="y" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="x" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    
  )
}

export default CoinChart