import { prisma } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'

const YT_REGEX = /^https:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]{11}(&t=\d+s)?$/
const StreamSchema = z.object({
    createrId : z.string(),
    url : z.string()
})

export async function POST(req:NextRequest) {
    try{

        const data = StreamSchema.parse(await req.json())
        const url = data.url
        const createrId = data.createrId
        const isYT = YT_REGEX.test(url)
        if(!isYT){
            return NextResponse.json({
            message : "Invalid url"
        },{
            status : 411
        })
        }

        const extractedId = data.url.split("?v=")[1] // contains the unique id of a youtube video
        await prisma.stream.create({
            data:{
                userId : createrId,
                url : url,
                extractedID : extractedId,
                type : "Youtube"
            }
        })
    }catch(e){
        return NextResponse.json({
            message : "Error while adding a stream"
        },{
            status : 411
        })
    }

}
   
export async function GET(req:NextRequest) {
    const createId = req.nextUrl.searchParams.get("createrId")
    const streams = prisma.stream.findMany({
        where : {
            userId : createId ?? ""
        }
    })
}