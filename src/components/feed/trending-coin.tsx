import { currencyFormat } from "@/lib/utils/currency"
import { percentageFormat } from "@/lib/utils/percentage"
import Image from "next/image"
import Link from "next/link"

const TrendingCoin = ({coin}:any) => {

    return (
      <Link href={`/market/${coin.id}`}>
          <div className="grid grid-cols-3 items-center px-5 py-2">
            <div className="flex items-center gap-3">
              <Image src={coin.image} alt={coin.name} width={60} height={45}/>
              <p>{coin.name}</p>
            </div>
            <div className="flex gap-5">
              <span>{currencyFormat(coin.price)}</span>
              <span>{percentageFormat(coin.change)}</span>  
            </div>     
              <Image src={coin.chart} alt={`${coin.name} sparkline`} width={160} height={90} />
          </div>
      </Link>
    )
  }
  
  export default TrendingCoin