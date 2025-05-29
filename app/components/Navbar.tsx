"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Butcherman } from "next/font/google";

export default function Navbar(){
    const session = useSession()
    return <div className="w-screen h-5 bg-amber-200 flex justify-between">
        <div className="">
            Playit
        </div>
        <div>
           {session.status === "unauthenticated" &&<button onClick={()=>signIn()}>signIn</button>}
           {session.status === "authenticated" &&<button onClick={()=>signOut()}>Logout</button>}

        </div>
    </div>
}