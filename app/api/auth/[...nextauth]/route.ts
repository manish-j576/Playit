import { prisma } from "@/lib/db";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  // i want to use google provider 
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log("opppppppppppppppppppppppppppppppppp")
        console.log(credentials?.email)
        console.log(credentials?.password)
        // const user = prisma.user.findFirst({
        //   where:{
        //         email,

        //   }
        // })
        // if (user) {
        //   return user;
        // } else {
        //   return null;
        // }
        return 1
      }
    }),
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
session:{
  strategy:"jwt",
  maxAge:30*60,
  updateAge:0
},
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