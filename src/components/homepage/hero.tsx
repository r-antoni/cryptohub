import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-10'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <h1 className='text-4xl font-semibold'>
          All-In-One Crypto Tracker For Managing Your Crypto, DeFi & NFT Assets
        </h1>
        <p>
          We’re the only platform on the market that supports all major crypto platforms and DeFi protocols.
        </p>
      </div> 
      <div>
          <Link href={"/feed"}>
            <Button className='bg-blue-400 hover:bg-blue-500'>Launch App</Button>
          </Link>
      </div>
      <div className='flex flex-col items-center'>
          <p className='text-sm'>
            Data provided using :
          </p>
          <Link href="https://docs.coingecko.com/v3.0.1/reference/introduction">
            <p className='text-xs text-green-400'>Coingecko API</p>
          </Link>
          <Link href="https://www.coinlore.com/cryptocurrency-data-api">
            <p className='text-xs text-green-600'>Coinlore API</p>
          </Link>
      </div>
    </section>
  )
}

export default Hero