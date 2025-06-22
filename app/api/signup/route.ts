
import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
export  async function POST(req : NextRequest){
    

        try{

            const saltRound = 10
            const data = await req.json()
            const hashedPassword = await bcrypt.hash(data.formData.password , saltRound)
            const response = await prisma.user.create({
                data:{
                    email : data.formData.email,
                    hashedpassword : hashedPassword,
                    provider : "Credential",
                }
            })
            return NextResponse.json({
            message : "Signin Successfull"
        })
        }catch(e){
            return NextResponse.json({
                message : "Error occured during Signup"
            })
        }
        

        
} 