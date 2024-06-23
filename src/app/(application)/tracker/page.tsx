"use client"
import trackerStore from '@/stores/trendingStore'
import Link from 'next/link'
import { useEffect } from 'react'

const PriceTracker = () => {

const store = trackerStore((state:any)=> state)

useEffect (()=>{
  store.fetchTrending()
  }, [])
  
  return (
    <div>
      Price tracker
      <input className='text-black' type="text" value={store.query} onChange={store.setQuery}/>
      {store.coins.map((coin:any) => {
        return(
          <div key={coin.id}>
            <Link href = {`/tracker/${coin.id}`}>
              {coin.name}
            </Link>
          </div>
        )
      })}

      {store.nfts.map((nft:any)=>{
        return(
          <div key={nft.id}>
            {nft.name}
          </div>
        )
      })}

      {store.categories.map((cat:any)=>{
        return(
          <div key={cat.id}>
            {cat.name}
          </div>
        )
      })}
    </div>
  )
}

export default PriceTracker