import Markets from '@/components/market/markets'
import { Separator } from '@/components/ui/separator'

const Market = () => {
  return (
    <main className='flex flex-col items-center justify-center mx-5 pb-5'>
        <h2 className='text-3xl font-bold py-5'>Cryptocurrency Markets</h2>
        <Separator />
        <Markets />
    </main>
  )
}

export default Market