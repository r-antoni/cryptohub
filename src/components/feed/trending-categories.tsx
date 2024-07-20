import { currencyFormat } from "@/lib/utils/currency"
import { percentageFormat } from "@/lib/utils/percentage"
import Image from "next/image"

const TrendingCategories = (cat:any) => {
  console.log(cat.cat)
  return (
        <div className="grid grid-cols-4 gap-5 justify-center items-center py-[4px]">
            <p>{cat.cat.name}</p>
            <span>{currencyFormat(cat.cat.marketcap)}</span>
            <span className={cat.cat.change > 0 ? "text-green-400" : "text-red-400"}>{percentageFormat(cat.cat.change)}</span>
            <Image src={cat.cat.chart} alt={`${cat.name} sparkline`} width={160} height={90} />
        </div>
  )
}

export default TrendingCategories