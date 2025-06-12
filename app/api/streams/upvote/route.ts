
import { prisma } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const UpVoteSchema = z.object({
    StreamId : z.string()
})

export async function POST(req : NextRequest) {
    console.log("upvote form the server")
    const session = await getServerSession();
    // TODO - We can get rid of the DB call 
    const user = await prisma.user.findFirst({
        where : {
            email : session?.user?.email ?? ""
        }
    })
    console.log("user is :" )
    console.log(user)
    if(!user){
        return NextResponse.json({
            message : "Unauthenticated"
        },{
            status : 403
        })
    }
    try{
        const data = UpVoteSchema.parse(await req.json());
        console.log("inside try catch")
        console.log("user ID  : ", user.id)
        console.log("streamID : ",data.StreamId)
        await prisma.upvotes.create({
            data :{
                //@ts-ignore
                userId : user.id,
                streamId : data.StreamId
            }
        })
        console.log("data base entry occred");
        
        return NextResponse.json({
            message : "Upvote done"
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