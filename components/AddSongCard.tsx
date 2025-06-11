"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function AddSongCard() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const session = useSession();

  async function handleOnClick() {
    if (!youtubeUrl.trim()) {
      alert("Please enter a YouTube URL");
      return;
    }
    try {
      const response = await axios.post(`${BACKEND_URL}/streams`, {
        email: session.data?.user?.email,
        url: youtubeUrl,
      });
      alert(response.data.message);
    } catch (e) {
      alert("Invalid url");
    }
  }
  return (
    <Card className="bg-gray-900/50 border-gray-800 text-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl ">Add a Song</CardTitle>
        <CardDescription>
          Paste a YouTube video link to add a song to the queue
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="https://youtube.com/watch?v=..."
            // value={youtubeLink}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
          />
          <Button
            onClick={handleOnClick}
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
