import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Image from 'next/image'
import NewsBg from "../../../public/newsletter.svg"

const Newsletter = () => {
  return (
    <section className='flex justify-center items-center gap-20 bg-gray-50 px-10 py-10 rounded-lg'>
      <div className='flex flex-col items-start'>
        <h2 className='text-2xl font-semibold'>Stay on top of crypto. All the time, any time.</h2>
        <p>Please keep me updated by email with the latest crypto news, research findings, coin listings and more information from Cryptohub.</p>
        <div className="flex w-full max-w-sm items-center space-x-2 mt-10">
          <Input type="email" placeholder="Enter your e-mail address" />
          <Button className='bg-blue-400 hover:bg-blue-500'>Subscribe</Button>
        </div>
      </div>
      <Image src={NewsBg} alt='Newsletter Background' />
    </section>
  )
}

export default Newsletter