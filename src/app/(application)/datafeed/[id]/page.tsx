"use client"
import detailStore from "@/stores/detailStore"
import { useParams } from "next/navigation"
import { useEffect } from "react"

export default function () {
  
  const store = detailStore()
  const params = useParams()

  useEffect(() => {
  store.fetchData (params.id)  
  }, [])
  
  return (
    <div>
    
    </div>
  )
}