"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar } from "@/components/ui/avatar"
import {
  Music,
  Users,
  ThumbsUp,
  ThumbsDown,
  Play,
  SkipForward,
  Volume2,
  Pause,
  Share2,
  Copy,
  Check,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import AddSongCard from "@/components/AddSongCard"
import Leaderboard from "@/components/Leaderboard"
import DashboardNavbar from "@/components/DashboardNavbar"
import CurrentPlaying from "@/components/CurrentPlaying"




export default function Dashboard() {
  const [youtubeLink, setYoutubeLink] = useState("")
  const [isPlaying, setIsPlaying] = useState(true)
  // const [songsList, setSongsList] = useState(songs)
  const [songsList , setSongsList] = useState([])
  const currentSong = songsList[0]
  const [shareUrl, setShareUrl] = useState("")
  const [copied, setCopied] = useState(false)




  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle YouTube link submission logic here
    console.log("Submitted YouTube link:", youtubeLink)
    setYoutubeLink("")
    // In a real app, you would parse the YouTube link and add the song to the list
  }

  const handlePlayNext = () => {
    // Logic to play the next song
    console.log("Playing next song")
    // In a real app, you would update the current song and player state
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleShare = async () => {
    const roomUrl = `${window.location.origin}/room/music-lovers-123`
    setShareUrl(roomUrl)

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join my PlayIt room!",
          text: "Come listen to music with me on PlayIt - vote for your favorite songs!",
          url: roomUrl,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback to copying to clipboard
      handleCopyLink(roomUrl)
    }
  }

  const handleCopyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.log("Failed to copy:", error)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <DashboardNavbar></DashboardNavbar>
      <main className="flex-1 container max-w-7xl mx-auto px-4 py-6 ">
        <div className="grid gap-6 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_350px]">
          <div className="space-y-6">
            {/* YouTube Link Input */}
            <AddSongCard></AddSongCard>
            {/* Leaderboard */}
            <Leaderboard></Leaderboard>
          </div>

          {/* Current Playing and Sidebar */}
          <CurrentPlaying></CurrentPlaying>
          {/* <div className="space-y-6">
            Now Playing
            <Card className="bg-gray-900/50 border-gray-800 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Now Playing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative aspect-video w-full rounded-md overflow-hidden">
                  <Image
                    src={currentSong.thumbnail || "/placeholder.svg"}
                    alt={currentSong.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="font-bold text-white">{currentSong.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-[35%]" />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>1:58</span>
                    <span>{currentSong.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-10 w-10 rounded-full text-white hover:bg-white/10"
                      onClick={togglePlayPause}
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-10 w-10 rounded-full text-white hover:bg-white/10"
                      onClick={handlePlayNext}
                    >
                      <SkipForward className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Volume2 className="h-4 w-4 text-gray-400" />
                    <div className="h-1 w-20 bg-gray-700 rounded-full overflow-hidden">
                      <div className="bg-gray-400 h-full w-[70%]" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={handlePlayNext}
                >
                  <SkipForward className="h-4 w-4 mr-2" />
                  Play Next Song
                </Button>
              </CardFooter>
            </Card>

            Room Info
            <Card className="bg-gray-900/50 border-gray-800 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Room Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Room Name</span>
                  <span className="font-medium">Music Lovers</span>
                </div>
                <Separator className="bg-gray-800" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Created By</span>
                  <span className="font-medium">John Doe</span>
                </div>
                <Separator className="bg-gray-800" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Active Since</span>
                  <span className="font-medium">2 hours ago</span>
                </div>
                <Separator className="bg-gray-800" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Songs Played</span>
                  <span className="font-medium">24</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Room
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-800"
                  onClick={() => handleCopyLink(`${window.location.origin}/room/music-lovers-123`)}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2 text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Link
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div> */}
        </div>
      </main>

      <footer className="py-6 px-4 border-t border-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} PlayIt. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-xs text-gray-500 hover:text-purple-400">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-purple-400">
              Privacy
            </Link>
            <Link href="/help" className="text-xs text-gray-500 hover:text-purple-400">
              Help
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
