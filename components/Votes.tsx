import axios from "axios"
import { useEffect } from "react"


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export async function Votes(){

    async function getUpvotes(){
        
        const data = await axios.get(`${BACKEND_URL}/streams/getupvotes`)
        const upvotes = data.upvotes
    }
    useEffect(()=>{
        getUpvotes()
    },[])
    return <span  className="font-medium text-sm">{upvotes}</span>
}