import { prisma } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest) {
    const data = await req.json()
    const streamId = data.streamID
    const upVotes = await prisma.upvotes.count({
        where : {
            streamId : streamId
        }
    })
    console.log(upVotes)
    return NextResponse.json({
        upVotes
    })
}