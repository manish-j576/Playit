import { prisma } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
//@ts-ignore
import youtubesearchapi  from "youtube-search-api"
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

        const extractedId = (data.url.split("?v=")[1]).split("&")[0] // contains the unique id of a youtube video
        const details = await youtubesearchapi.GetVideoDetails(extractedId)
        const title = details.title
        const smallImgURL = `https://img.youtube.com/vi/${extractedId}/mqdefault.jpg`
        const bigImgURL = `https://img.youtube.com/vi/${extractedId}/0.jpg `
        
        const stream = await prisma.stream.create({
            data:{
                userId : createrId,
                url : url,
                extractedID : extractedId,
                type : "Youtube",
                title ,
                smallImgURL,
                bigImgURL
            }
        })
        return NextResponse.json({
            message : "Stream added successfully",
            id : stream.id
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
    const streams = await prisma.stream.findMany({
        where : {
            userId : createId ?? ""
        }
    })
    console.log(streams)
    return NextResponse.json({
        streams
    })
}