import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  // i want to use google provider 
  providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
  })
]
})

export { handler as GET, handler as POST }