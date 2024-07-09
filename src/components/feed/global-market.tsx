"use client"
import useAxios from '@/hooks/useAxios'


const GlobalMarket = () => {
    const {response} = useAxios("global")
    
    return (
    <>
        <div>
            <h2>Active Cryptocurrencies</h2>
            <span>{response?.data.active_cryptocurrencies}</span>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </>
  )
}

export default GlobalMarket