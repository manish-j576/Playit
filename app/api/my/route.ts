import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest) {
    
        const session = await getServerSession();
    
        // TODO - We can get rid of the DB call 
        const user = prisma.user.findFirst({
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
            const streams = await prisma.stream.findMany({
        where : {
            //@ts-ignore
            userId : user.id 
        },
        include : {
            _count : {
                select :{
                    upvotes : true
                }
            },
            upvotes : {
                where :{
                    //@ts-ignore
                    userId : user.id
                }
            }
        }

        
    })
    console.log("90909090909")
    console.log(streams)
    return NextResponse.json({
        streams
    })
        }catch(e){
            return NextResponse.json({
                message : "Error occured"
            })
        }

    
}