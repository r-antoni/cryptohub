"use client"
import useAxios from "@/hooks/useAxios"
import Image from "next/image"
import { useParams } from "next/navigation"

const CoinDetail = () => {
    const {id} = useParams()
    const {response} = useAxios(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false`)
  
    if(!response) {
        return <section>Loading...</section>
    }

    return (
    <div className="">
        <section className="flex">
            <span>{response.market_cap_rank}.</span>
            <img src={response.image.small} alt={response.name} />
            <h3>{response.name}</h3>
        </section>
        <section>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </section>
        <section>

        </section>
    </div>
  )
}

export default CoinDetail