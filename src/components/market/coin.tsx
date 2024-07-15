
import { currencyFormat } from '@/lib/utils/currency'
import numberFormat from '@/lib/utils/number'
import { percentageFormat } from '@/lib/utils/percentage'
import Image from 'next/image'
import Link from 'next/link'

const Coin = ({coin}:any) => {
  return (
    <>
    <Link href={`/market/${coin.id}`}>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3'>
            <div className='flex gap-2 items-center'>
                <span>{coin.market_cap_rank}.</span>
                <Image src={coin.image} alt={coin.name} width={30} height={30}/>
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