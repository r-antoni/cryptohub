
import { percentageFormat } from '@/lib/utils/percentage'

const TrendingNFT = ({nft}:any) => {
  return (
    <>
        <div>
            <div className='flex gap-5'>         
                <img src={nft.image} alt={nft.name} />
                <p>{nft.name}</p>
                <span>{nft.price}</span>
                <span>{percentageFormat(nft.change)}</span>
                <img src={nft.chart} alt={`${nft.name} sparkline`} />
            </div>
        </div>
    </>
  )
}

export default TrendingNFT