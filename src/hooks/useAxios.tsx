"use client"
import axios from "axios";
import { useEffect, useState } from "react"

const useAxios = (param:any) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    const fetchData = async (param:"") => {
        try {
            setLoading(true)
            const res = await axios.get(`https://api.coingecko.com/api/v3/${param}`);
            setResponse(res.data)
        } catch (error) {
            setError(JSON.stringify(error))
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(param)
    },[])

  return { response, loading, error }
}

export default useAxios