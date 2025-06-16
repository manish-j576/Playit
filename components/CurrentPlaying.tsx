"use client"
import { Check, Copy, Divide, Image, Share2, SkipForward, Volume2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "@radix-ui/react-separator";
import { use, useEffect, useState } from "react";
import Roominfo from "./Roominfo";
import { set } from "zod";
import { useSession } from "next-auth/react";
import axios from "axios";
import YoutubePlayer from "./YoutubePlayer";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function CurrentPlaying() {

    const session = useSession()

    const [songsList , setSongsList] = useState([])
    const [currentSong, setCurrentSong] = useState(songsList[0])
    const [isPlaying, setIsPlaying] = useState(true)
    //   const [currentSong, setCurrentSong] = useState(songs[0])
    //   const [shareUrl, setShareUrl] = useState("")

     async function getStreams() {
        
        try{
            const response = await axios.get(`${BACKEND_URL}/streams/?email=${session.data?.user?.email}`)
            setSongsList(response.data.streams)
            setCurrentSong(response.data.streams[0])

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
    return (<div className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-800 text-white ">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Now Playing </CardTitle>
              </CardHeader>
              <div className="w-full flex justify-center">
                {currentSong ? <YoutubePlayer extractedId={currentSong.extractedID}></YoutubePlayer> : <div>Song loading...</div>}
                
              </div>
              </Card>
            <Roominfo></Roominfo>
          </div>)}