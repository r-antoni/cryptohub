import searchStore from '@/lib/stores/searchStore'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from './ui/separator'


const Searchbar = () => {
  const store = searchStore()

  return (
    <div className='absolute top-3 flex flex-col w-[25%] text-black text-sm z-50'>
      <input className='items-center border border-black focus:outline-none px-4 py-2 rounded-lg' type="text" placeholder='Search coins' value={store.query} onChange={store.setQuery}/>
      {store.coins.length > 0 ?
      <ScrollArea className="bg-slate-400 rounded-lg h-[200px]">
        {store.coins.map((coin:any) => {
        return (
          <Link href={`/market/${coin.id}`}>
            <div className='flex items-center px-4 py-2 gap-3 text-white hover:text-black'>
              <Image src={coin.image} alt={coin.name} width={30} height={20}/>
              <p>{coin.name}</p>
            </div>
            <Separator />     
          </Link>
        )
      })}
      </ScrollArea> : <></>}
      
    </div>
  )
}

export default Searchbar