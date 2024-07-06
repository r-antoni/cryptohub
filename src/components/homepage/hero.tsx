import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <div>
            <Link href={"/feed"}>Launch Cryptohub Feed</Link>
        </div>
        <div>
            <Link href={"/dex"}>Launch Cryptohub DEX</Link>
        </div>
    </div>
  )
}

export default Hero