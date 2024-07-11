"use client"
import useAxios from "@/hooks/useAxios"
import { useParams } from "next/navigation"

const CoinDetail = () => {
    const {id} = useParams()
    const {response} = useAxios(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false`)
  
    if(!response) {
        return <section>Loading...</section>
    }

    return (
    <>
        {/* <section className="flex">
            <span>{response.market_cap_rank}.</span>
            <img src={response.image.small} alt={response.name} />
            <h3>{response.name}</h3>
        </section>
        <section>
            <div>
                <h3>Website</h3>
                <span>{response.links.homepage.[0]}</span>
            </div>
            <div>
                <h3>All Time High</h3>
                <span>{response.ath.usd}</span>
                <span>{response.ath_change_percentage.usd}</span>
            </div>
            <div>
                <h3>All Time Low</h3>
                <span>{response.atl.usd}</span>
                <span>{response.atl_change_percentage.usd}</span>
            </div>
        </section>
        <section>
            <p className="mt-5 [&>a]:text-blue-400 [&>a]:underline" dangerouslySetInnerHTML={{ __html: response.description.en}}></p>
        </section> */}
    </>
  )
}

export default CoinDetail