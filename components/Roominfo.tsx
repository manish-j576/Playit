"use client"
import { Separator } from "@radix-ui/react-separator";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Copy, Share2 } from "lucide-react";
import { useState } from "react";

export default function Roominfo() {
          const [copied, setCopied] = useState(false)
    
    return (
        <Card className="bg-gray-900/50 border-gray-800 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Room Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Room Name</span>
                  <span className="font-medium">Music Lovers</span>
                </div>
                <Separator className="bg-gray-800" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Created By</span>
                  <span className="font-medium">John Doe</span>
                </div>
                <Separator className="bg-gray-800" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Active Since</span>
                  <span className="font-medium">2 hours ago</span>
                </div>
                <Separator className="bg-gray-800" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Songs Played</span>
                  <span className="font-medium">24</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                //   onClick={handleShare}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Room
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-800"
                //   onClick={() => handleCopyLink(`${window.location.origin}/room/music-lovers-123`)}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2 text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Link
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
    )}