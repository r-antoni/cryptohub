import { currencyFormat } from '@/lib/utils/currency'
import numberFormat from '@/lib/utils/number'
import { percentageFormat } from '@/lib/utils/percentage'
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '../ui/separator'

const Coin = ({coin}:any) => {
  return (
    <Link href={`/market/${coin.id}`}>
      <div className='grid grid-cols-7 py-3 items-center gap-5 h-14'>
        <div className='flex items-center gap-3'>
          <span className='w-8 text-sm'>{coin.rank}.</span>
          <Image className='rounded-full' src={coin.image} alt={coin.name} width={30} height={30} />
          <p className='truncate max-w-32'>{coin.name}</p>
        </div>
        <p>{currencyFormat(coin.high)}</p>
        <p>{currencyFormat(coin.low)}</p>
        <p className={coin.change > 0 ? "text-green-400 pl-[7px]" : "text-red-400"}>{percentageFormat(coin.change)}</p>
        <p>{currencyFormat(coin.price)}</p>
        <p>{numberFormat(coin.mcap)}</p>
        <p>{numberFormat(coin.volume)}</p>
      </div>
      <Separator />
    </Link>     
  )
}

export default Coin