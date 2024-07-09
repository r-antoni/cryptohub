"use client"
import { percentageFormat } from '@/lib/utils/percentage'

const TrendingNFT = ({nft}:any) => {
  return (
    <>
        <div>
            <div className='flex gap-5'>         
                <img src={nft.thumb} alt={nft.name} />
                <p>{nft.name}</p>
                <span>{nft.data.floor_price}</span>
                <span>{percentageFormat(nft.floor_price_24h_percentage_change)}</span>
            </div>
        </div>
    </>
  )
}

export default TrendingNFT