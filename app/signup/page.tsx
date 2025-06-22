"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Music, Eye, EyeOff, Axis3D } from "lucide-react"
import Link from "next/link"
import axios, { Axios } from "axios"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
export default function SignUpPage() {

  const router = useRouter()
  console.log("SignUpPage")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("handleSubmit")
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Signup attempt:", formData)
    const res = await axios.post(`${BACKEND_URL}/signup`,{
      formData
    })
    console.log(res.status)
    setIsLoading(false)
    alert(res.data.message)
    if(res.status==200){
      router.push("/login")
    }
  }

  const handleGoogleSignUp = async () => {
    setIsGoogleLoading(true)
    signIn("google")
    // Simulate Google sign-up process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Google sign-up attempt")
    // In a real app, you would integrate with Google OAuth here

    setIsGoogleLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <Link href="/" className="flex items-center justify-center gap-2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1.5 rounded-lg">
            <Music className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            PlayIt
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 items-center">
          <Link href="/" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="/login" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Sign In
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Welcome Section */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Join PlayIt
            </h1>
            <p className="text-gray-400">Create your account and start your collaborative music journey</p>
          </div>

          {/* Signup Card */}
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-white">Create Account</CardTitle>
              <CardDescription className="text-gray-400">Fill in your details to get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email 
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-400 hover:text-white"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-400 hover:text-white"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full bg-gray-800" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full border-gray-700 text-white hover:bg-gray-800 hover:text-white"
                onClick={handleGoogleSignUp}
                disabled={isGoogleLoading}
              >
                {isGoogleLoading ? (
                  "Creating account..."
                ) : (
                  <>
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Sign up with Google
                  </>
                )}
              </Button>
            </CardContent>
            <CardFooter>
              <div className="text-center text-sm text-gray-400 w-full">
                Already have an account?{" "}
                <Link href="/login" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Sign in here
                </Link>
              </div>
            </CardFooter>
          </Card>

          {/* Additional Info */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <Link href="/terms" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/help" className="hover:text-purple-400 transition-colors">
                Help
              </Link>
            </div>
            <p className="text-xs text-gray-500">
              By creating an account, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </main>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}
