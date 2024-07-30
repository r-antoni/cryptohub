import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Buy = () => {
  return (
    <section className='flex items-center justify-center gap-10'>
        <div className='flex flex-col items-start justify-center'>
            <h2 className='text-2xl'>Buy & Swap Crypto Where You Track It</h2>
            <p>Purchase crypto in just a few steps. Then swap on best terms to keep up with trends.</p>
            <Link href="/swap">
                <Button className='bg-blue-400 hover:bg-blue-500 mt-10'>Buy & Swap Crypto</Button>
            </Link> 
        </div>
        <div></div>
    </section>
  )
}

export default Buy