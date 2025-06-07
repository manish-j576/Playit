"use client"
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"

export default function Navbar(){
    const session = useSession()
    return <div className="flex flex-col  bg-gray-950 text-white">
        <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <Link href="/" className="flex items-center justify-center gap-2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
            <Music className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            PlayIt
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="#features" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-purple-400 transition-colors">
            How It Works
          </Link>
          <Link href="#community" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Community
          </Link>
          <div>
           {session.status === "unauthenticated" &&<Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" onClick={()=>signIn()}>Signin</Button>}
           {session.status === "authenticated" &&<Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" onClick={()=>signOut()}>Logout</Button>}

        </div>
        </nav>
      </header>
        
    </div>
}