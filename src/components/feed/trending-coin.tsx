
import { percentageFormat } from "@/lib/utils/percentage"

const TrendingCoin = ({coin}:any) => {

    return (
      <>
          <div className='border-1'>
              <div className="flex justify-start gap-5 items-center">
                  <span>{coin.score+1}.</span>
                  <img src={coin.small} alt={coin.name} />
                  <p>{coin.name}</p>
                  <small>{coin.symbol}</small>
                  <span>{percentageFormat(coin.data.price_change_percentage_24h.usd)}</span>
              </div>
          </div>
      </>
    )
  }
  
  export default TrendingCoin