
import { prisma } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const DownVoteSchema = z.object({
    streamId : z.string()
})

export async function POST(req : NextRequest) {
    console.log("downvote from the server")
    const session = await getServerSession();
    // TODO - We can get rid of the DB call 
    const user = await prisma.user.findFirst({
        where : {
            email : session?.user?.email ?? ""
        }
    })

    if(!user){
        return NextResponse.json({
            message : "Unauthenticated"
        },{
            status : 403
        })
    }
    try{
        const data = DownVoteSchema.parse(await req.json());
        await prisma.upvotes.delete({
            where :{
                streamId_userId:{
                //@ts-ignore
                userId : user.id,
                streamId : data.streamId
                }
                 
            }
        })
        return NextResponse.json({
            message:"Downvoted successfully"
        })
    }catch(e){
        console.log("inside catch block")
        return NextResponse.json({
            message : "Error while upvoting"
        },{
            status : 403
        })
    }
    
}