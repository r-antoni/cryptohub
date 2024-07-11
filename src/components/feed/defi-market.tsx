"use client"

import useAxios from "@/hooks/useAxios"
import { currencyFormat } from "@/lib/utils/currency"
import { percentageFormat } from "@/lib/utils/percentage"

const DefiMarket = () => {
  const {response} = useAxios("https://api.coingecko.com/api/v3/global/decentralized_finance_defi")
  console.log(response)
  return (
   <div>
      <div>
        <h2>DeFi Total Marketcap</h2>
        {currencyFormat(parseFloat(response?.data.defi_market_cap))}
      </div>
      <div>
        <h2>Trading Volume 24H</h2>
        {currencyFormat(parseFloat(response?.data.trading_volume_24h))}
      </div>
      <div>
        <h2>Defi Dominance</h2>
        {percentageFormat(parseFloat(response?.data.defi_dominance))}
      </div>
   </div>
  )
}

export default DefiMarket