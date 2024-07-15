
import { currencyFormat } from '@/lib/utils/currency'
import numberFormat from '@/lib/utils/number'
import { percentageFormat } from '@/lib/utils/percentage'
import Image from 'next/image'
import Link from 'next/link'

const Coin = ({coin}:any) => {
  return (
    <Link href={`/market/${coin.id}`}>
      <div className='grid grid-cols-7'>
        <div className='flex'>
          <span>{coin.rank}.</span>
          <Image src={coin.image} alt={coin.name} width={30} height={30} />
          <p>{coin.name}</p>
        </div>
        <p>{currencyFormat(coin.high)}</p>
        <p>{currencyFormat(coin.low)}</p>
        <p>{percentageFormat(coin.change)}</p>
        <p>{currencyFormat(coin.price)}</p>
        <p>{numberFormat(coin.mcap)}</p>
        <p>{numberFormat(coin.volume)}</p>
      </div>
    </Link>     
  )
}

export default Coin