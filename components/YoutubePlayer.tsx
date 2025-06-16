"use client"
import { useEffect, useState } from "react"

export default function YoutubePlayer({extractedId}:{extractedId:string}) {
    console.log("extracted id is : ")
    console.log(extractedId)
    const [url , setUrl] = useState("")
    useEffect(() => {
        setUrl(`https://www.youtube.com/embed/${extractedId}`)
    },[extractedId])
    return (
        <div className="relative aspect-video w-[90%] rounded-md overflow-hidden flex justify-center">
                    <iframe
                        src={url}
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                    
        </div>
        

    )
}