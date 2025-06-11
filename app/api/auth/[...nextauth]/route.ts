import { prisma } from "@/app/lib/db";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  // i want to use google provider 
  providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    authorization: {
    params: {
      prompt: "select_account",
      access_type: "offline",
      response_type: "code"
    }
  }
  })
],
secret :process.env.NEXTAUTH_SECRET ?? "secret",
callbacks:{
   async signIn(params){
    console.log(params)
    if(!params.user.email){
      return false
    }
    try{
         await prisma.user.create({
           data:{
            email : params.user.email,
            provider :"Google"
           }
        })

    }catch(e){

    }
    return true
  }
}
})

export { handler as GET, handler as POST }