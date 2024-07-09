"use client"
import useAxios from '@/hooks/useAxios'
import Coin from './coin'

// /coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&precision=2

const Markets = () => {
    const {response} = useAxios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=true&precision=2")
  return (
    <section className='mt-10'>
        <h2>Markets</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3'>
            <span>Coin</span> 
            <span className='invisible md:visible'>24H Change</span>
            <span>Current Price</span>
            <span className='invisible xl:visible'>Market Cap</span>
        </div>
        <div>
            {response && response.map((coin:any) => 
                <Coin key={coin.id} coin={coin}/>
            )}
        </div>
    </section>
  )
}

export default Markets