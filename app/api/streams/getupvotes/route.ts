import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";


const  getUpVoteSchema = z.object({
        streamId : z.string()
})
export async function GET(req : NextRequest) {

    try{
        
        const { searchParams } = new URL(req.url);
        const streamId = searchParams.get("streamId");
        const upVotes = await prisma.upvotes.count({
        where : {
            streamId
        }
    })
    return NextResponse.json({
        upVotes
    })
    }catch(e){
        return NextResponse.json({
            message : "Error getting upvotes"
        })
    }
    
}