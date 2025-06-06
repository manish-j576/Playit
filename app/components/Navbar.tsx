"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Butcherman } from "next/font/google";

export default function Navbar(){
    const session = useSession()
    return <div className="w-screen h-fit bg-amber-200 flex justify-between">
        <div className="">
            Playit
        </div>
        <div>
           {session.status === "unauthenticated" &&<button className="w-fit p-2 mr-3 bg-gray-700 flex justify-between" onClick={()=>signIn()}>signIn</button>}
           {session.status === "authenticated" &&<button className="w-fit p-2 mr-3 bg-gray-700 flex justify-between" onClick={()=>signOut()}>Logout</button>}

        </div>
    </div>
}