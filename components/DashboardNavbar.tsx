
import { Music } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"
import { Button } from "./ui/button";
export default function DashboardNavbar() {
  const session = useSession()

  const handleLogOut =  () => {
     signOut({callbackUrl: "/"})
  }
    return (<header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800 sticky top-0 z-10 bg-gray-950/95 backdrop-blur-sm">
        <Link href="/" className="flex items-center justify-center gap-2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1.5 rounded-lg">
            <Music className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            PlayIt
          </span>
        </Link>
        <nav className="ml-auto flex gap-2 sm:gap-6 items-center">
          <Link href="/dashboard" className="text-sm font-medium text-purple-400 transition-colors">
            Dashboard
          </Link>
          <Link href="/discover" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Discover
          </Link>
          <Link href="/rooms" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Rooms
          </Link>
          
            <div>
           {session.status === "unauthenticated" &&<Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" onClick={()=>signIn()}>Signin</Button>}
           {session.status === "authenticated" &&<Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" onClick={()=>handleLogOut()}>Logout</Button>}

        </div>
        </nav>
      </header>)
}