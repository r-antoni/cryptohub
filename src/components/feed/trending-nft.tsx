
import { percentageFormat } from '@/lib/utils/percentage'
import Image from 'next/image'

const TrendingNFT = ({nft}:any) => {
  return (
    <div className="grid grid-cols-3 items-center justify-center px-5 py-2">
    <div className="flex items-center gap-3">
      <Image className='rounded-lg' src={nft.image} alt={nft.name} width={60} height={45}/>
      <p>{nft.name}</p>
    </div>
    <div className="grid grid-cols-2">
      <span>{nft.price}</span>
      <span className={nft.change > 0 ? "text-green-400" : "text-red-400"}>{percentageFormat(nft.change)}</span>  
    </div>     
      <Image src={nft.chart} alt={`${nft.name} sparkline`} width={160} height={90} />
  </div>
  )
}

export default TrendingNFT