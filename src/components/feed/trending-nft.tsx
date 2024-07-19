
import { percentageFormat } from '@/lib/utils/percentage'

const TrendingNFT = ({nft}:any) => {
  return (
    <>

            <div className='grid grid-cols-3'>
              <div className='flex'>
              <img src={nft.image} alt={nft.name} />
                <p>{nft.name}</p>
              </div>       
                <div>
                 <span>{nft.price}</span>
                <span>{percentageFormat(nft.change)}</span> 
                </div>
                <img src={nft.chart} alt={`${nft.name} sparkline`} />
            </div>

    </>
  )
}

export default TrendingNFT