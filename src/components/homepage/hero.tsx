import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <h1>
        All-In-One Crypto Tracker For Managing Your Crypto, DeFi & NFT Assets
      </h1>
      <p>
        We’re the only platform on the market that supports all major crypto platforms and DeFi protocols.
      </p>
        <div>
            <Link href={"/feed"}>
              <Button className='bg-blue-400 hover:bg-blue-500'>Launch App</Button>
            </Link>
        </div>
        <div>
          
        </div>
    </section>
  )
}

export default Hero