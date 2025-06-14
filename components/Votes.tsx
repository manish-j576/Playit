"use client"

import axios from "axios"
import { useEffect, useState } from "react"


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export  function Votes(props : any){

    const [votes , setVotes]=useState(0)

    async function getUpvotes(){
        
        const data = await axios.get(`${BACKEND_URL}/streams/getupvotes?streamId=${props.streamId}`)
        const numberOfUpvotes = data.data.upVotes
        setVotes(numberOfUpvotes)
    }
    useEffect(()=>{
        getUpvotes()
    },[])
    return <span  className="font-medium text-sm">{votes}</span>
}