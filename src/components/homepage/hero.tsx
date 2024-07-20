import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div>
        <div>
            <Link href={"/feed"}>
              <Button className='bg-blue-400'>Launch App</Button>
            </Link>
        </div>
    </div>
  )
}

export default Hero