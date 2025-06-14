"use client"
import {  ThumbsDown, ThumbsUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSession } from "next-auth/react"
import { Votes } from "./Votes"


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
const DefaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedeO-m0WTKMoqF5sNYn91g-Qv4oxBnNOxhA&s"
export default function Leaderboard(){

    const [songsList , setSongsList] = useState([])
    const session = useSession()
    console.log("session")
    console.log(session)
    async function getStreams() {
        console.log(session)
        try{
            const response = await axios.get(`${BACKEND_URL}/streams/?email=${session.data?.user?.email}`)
            setSongsList(response.data.streams)
        }catch(e){
            alert("Error occured")
        }
        console.log("end")
        return null

    }
    useEffect(() => {
  if (session.status === "authenticated") {
    getStreams()
  }
}, [session.status])

    async function handleUpvote(song : any){
        console.log("upvoted pressed")
        const response = await axios.post(`${BACKEND_URL}/streams/upvote`,{
                StreamId : song.id
        })
    }
    async function handleDownvote(song : any){
        console.log("downvotes pressed")
        const response = await axios.post(`${BACKEND_URL}/streams/downvote`, {
                streamId : song.id
            }
        )
    }
    return <Card className="bg-gray-900/50 border-gray-800 text-white">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Song Leaderboard</CardTitle>
                    <CardDescription>Vote for the songs you want to hear next</CardDescription>
                  </div>
                  
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {songsList.map((song)=>(
                    
                    <div key={song.id} className="flex items-center gap-3 p-2 bg-gray-800/50 rounded-lg">
                        <div className="relative h-20 w-[120px] rounded-md overflow-hidden flex-shrink-0">
                      <img src={song.smallImgURL} alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white truncate">{song.title}</h3>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-green-400 hover:text-green-300 hover:bg-green-900/20"
                        onClick={() => handleUpvote(song)}
                      >
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Votes streamId={song.id}></Votes>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-red-400 hover:text-red-300 hover:bg-red-900/20"
                        onClick={() => handleDownvote(song)}
                      >
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                </div>))}
              </CardContent>
            </Card>
}
