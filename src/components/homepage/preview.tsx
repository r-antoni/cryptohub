"use client"
import marketStore from '@/lib/stores/marketStore'
import { useEffect } from 'react'
import { Card } from '../ui/card'
import { Separator } from '../ui/separator'
import PreviewCoin from './preview-coin'
import { Button } from '../ui/button'
import Link from 'next/link'

const Preview = () => {
    const store = marketStore()
    useEffect(() => {
        store.fetchPreview()
    },[])

  return (
    <section className='flex flex-col items-center justify-center w-[50%] gap-5'>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl'>Get the most comprehensive data in realtime</h2>
            <p>Research, track, and manage any coin and more.</p>
        </div>
        <Card>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 py-2 gap-4 text-sm font-medium text-slate-500'>
            <span className='pl-10'>Name</span> 
            <span>Current Price</span>
            <span className='invisible md:visible'>24H Change</span>
            <span className='invisible xl:visible'>Market Cap</span>
            <span className='invisible xl:visible'>24H Volume</span>
        </div>
        <Separator />
        <div className="py-3">
            {store.preview.map((coin:any) => 
                    <PreviewCoin key={coin.id} coin={coin}/>
                )}
        </div>
        </Card>
        <div>
            <Link href="/market">
                <Button className='bg-blue-400 hover:bg-blue-500'>Show More</Button>
            </Link>
        </div>
        
    </section>
  )
}

export default Preview