
import { currencyFormat } from "@/lib/utils/currency"
import { percentageFormat } from "@/lib/utils/percentage"
import Image from "next/image"
import Link from "next/link"

const TrendingCoin = ({coin}:any) => {

    return (
      <Link href={`/market/${coin.id}`}>
          <div className='border-1'>
              <div className="flex justify-start gap-5 items-center">
                <img src={coin.image} alt={coin.name}/>
                <p>{coin.name}</p>
                <span>{currencyFormat(coin.price)}</span>
                <span>{percentageFormat(coin.change)}</span>
                <img src={coin.sparkline} alt="coin sparkline" />
              </div>
          </div>
      </Link>
    )
  }
  
  export default TrendingCoin