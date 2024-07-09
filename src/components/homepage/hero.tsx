import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <div>
            <Link href={"/feed"}>Launch App</Link>
        </div>
    </div>
  )
}

export default Hero