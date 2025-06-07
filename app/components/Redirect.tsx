"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function Redirect(){
    const session = useSession()
    const router = useRouter()
    useEffect(()=>{
        console.log(session)
        if(session.status === "authenticated")
        {
            router.push("/dashboard")  
        }
    })
    return null
}