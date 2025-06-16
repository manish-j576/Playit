import Navbar from "../components/Navbar";
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Users, Trophy, ThumbsUp, Play, Headphones, Radio, Star, ArrowUp, ArrowDown } from "lucide-react"
import Link from "next/link"
 import { Button } from "@/components/ui/button"
import { Redirect } from "../components/Redirect";
export default function Home() {
  return <div>
    <Navbar></Navbar>
    <Redirect></Redirect>
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-24 lg:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border-purple-700">
                    🎵 Collaborative Music
                  </Badge>
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-6xl/none bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Let the Community Choose the Beat
                  </h1>
                  <p className="max-w-[600px] text-sm sm:text-base text-gray-400 md:text-xl">
                    Join PlayIt, where music lovers unite to create the ultimate playlist. Vote for your favorite
                    tracks, climb the leaderboard, and let democracy decide what plays next.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Start Playing
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    <Headphones className="mr-2 h-4 w-4" />
                    Listen to Demo
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center mt-6 lg:mt-0">
                <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20"></div>
                  <Card className="relative bg-gray-900/50 border-gray-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        Live Leaderboard
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 p-3 sm:p-6">
                      {[
                        { rank: 1, song: "Bohemian Rhapsody", artist: "Queen", votes: 247 },
                        { rank: 2, song: "Hotel California", artist: "Eagles", votes: 198 },
                        { rank: 3, song: "Stairway to Heaven", artist: "Led Zeppelin", votes: 156 },
                      ].map((item) => (
                        <div
                          key={item.rank}
                          className="flex items-center justify-between p-2 sm:p-3 bg-gray-800/50 rounded-lg"
                        >
                          <div className="flex items-center gap-2 sm:gap-3">
                            <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                              #{item.rank}
                            </Badge>
                            <div>
                              <p className="font-medium text-white text-sm sm:text-base">{item.song}</p>
                              <p className="text-xs sm:text-sm text-gray-400">{item.artist}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <span className="text-green-400 font-medium text-xs sm:text-sm">{item.votes}</span>
                            <div className="flex gap-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0 text-green-400 hover:text-green-300"
                              >
                                <ArrowUp className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-red-400 hover:text-red-300">
                                <ArrowDown className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-8 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border-purple-700">
                  Features
                </Badge>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl text-white">
                  Music Democracy in Action
                </h2>
                <p className="max-w-[900px] text-sm sm:text-base text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience music like never before with our community-driven platform that puts the power of choice in
                  everyone's hands.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-4 py-8 md:py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 sm:p-3 rounded-lg w-fit">
                    <ThumbsUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg sm:text-xl">Democratic Voting</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">
                    Every member gets a voice. Upvote tracks you love, downvote ones you don't. The community decides
                    what plays next.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 sm:p-3 rounded-lg w-fit">
                    <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg sm:text-xl">Live Leaderboard</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">
                    Watch songs climb and fall in real-time. See what's trending and discover new favorites as they rise
                    to the top.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-900/50 border-gray-700 sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 sm:p-3 rounded-lg w-fit">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg sm:text-xl">Community Driven</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">
                    Connect with fellow music lovers, create rooms with friends, and build the perfect collaborative
                    playlist together.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-8 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border-purple-700">
                  How It Works
                </Badge>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl text-white">Simple. Social. Musical.</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 md:py-12 grid-cols-1 sm:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 sm:p-4 rounded-full">
                  <Music className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">1. Add Your Songs</h3>
                <p className="text-sm text-gray-400">
                  Search and add your favorite tracks to the community queue. Share your musical taste with everyone.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 sm:p-4 rounded-full">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">2. Vote & Engage</h3>
                <p className="text-sm text-gray-400">
                  Cast your votes on songs in the queue. Help the best tracks rise to the top of the leaderboard.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 sm:p-4 rounded-full">
                  <Radio className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">3. Enjoy Together</h3>
                <p className="text-sm text-gray-400">
                  Listen as the community's top choices play automatically. Discover new music and enjoy the collective
                  vibe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section id="community" className="w-full py-8 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl text-white">
                  Join the Music Revolution
                </h2>
                <p className="max-w-[900px] text-sm sm:text-base text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Thousands of music lovers are already shaping the soundtrack of their communities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-4 py-8 md:py-12 grid-cols-2 sm:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  50K+
                </div>
                <p className="text-xs sm:text-sm text-gray-400">Active Users</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  2M+
                </div>
                <p className="text-xs sm:text-sm text-gray-400">Songs Voted</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  10K+
                </div>
                <p className="text-xs sm:text-sm text-gray-400">Rooms Created</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <p className="text-xs sm:text-sm text-gray-400">Music Playing</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-8 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tighter md:text-4xl/tight text-white">
                Ready to Shape the Sound?
              </h2>
              <p className="mx-auto max-w-[600px] text-sm sm:text-base text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join PlayIt today and become part of a community where every vote counts and every song matters.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Join Now
                </Button>
              </form>
              <p className="text-xs text-gray-500">
                Free to join. Start voting immediately.{" "}
                <Link href="/privacy" className="underline underline-offset-2 text-purple-400">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} PlayIt. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/terms"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-purple-400"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-purple-400"
          >
            Privacy
          </Link>
          <Link
            href="/support"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-purple-400"
          >
            Support
          </Link>
        </nav>
      </footer>
    </div>
  

  </div>
}
