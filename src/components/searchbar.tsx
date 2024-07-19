import searchStore from '@/lib/stores/searchStore'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from './ui/separator'
import { IoMdSearch } from "react-icons/io";


const Searchbar = () => {
  const store = searchStore()

  return (
    <div className='w-80'>
      {/* Search Input */}
      <div className='flex items-center gap-2 h-9 rounded-md px-3 bg-slate-200 text-slate-400 text-sm'>
        <IoMdSearch size={16} />
        <input className='focus:outline-none bg-transparent' type="text" placeholder='Search coins' value={store.query} onChange={store.setQuery}/>
      </div>
      {/* Search Result */}
      <div className='absolute top-14 bg-slate-200 w-80 text-sm text-black rounded-md'>
        {store.coins.length > 0 ?
        <ScrollArea className="h-[200px]">
        {store.coins.map((coin:any) => {
        return (
          <Link href={`/market/${coin.id}`}>
            <div className='flex items-center px-4 py-2 gap-3 hover:bg-slate-300 '>
              <Image src={coin.image} alt={coin.name} width={30} height={20}/>
              <p>{coin.name} <span>({coin.symbol})</span></p>
            </div>
            <Separator />     
          </Link>
          )
        })}
        </ScrollArea> : <></>}
      </div>
      
      
    </div>
  )
}

export default Searchbar