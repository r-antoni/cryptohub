
import { currencyFormat } from '@/lib/utils/currency'
import numberFormat from '@/lib/utils/number'
import { percentageFormat } from '@/lib/utils/percentage'
import Link from 'next/link'

const Coin = ({coin}:any) => {
  return (
    <>
    <Link href={`/feed/${coin.id}`}>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3'>
            <div className='flex gap-2'>
                <span>{coin.market_cap_rank}.</span>
                <img className='w-6' src={coin.image} alt={coin.name} />
                <p>{coin.name}</p>
                <span>{coin.symbol}</span>
            </div>     
            <span className={`invisible md:visible ${coin.price_change_percentage_24h < 0 ? 'text-red-400': 'text-green-400'}`}>{percentageFormat(coin.price_change_percentage_24h)}</span>
            <span>{currencyFormat(coin.current_price)}</span>
            <span className='invisible xl:visible'>{numberFormat(coin.market_cap)}</span>  
        </div>
    </Link>     
    </>
  )
}

export default Coin