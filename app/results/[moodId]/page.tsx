"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { moods, roasts, distractions, playlists } from "@/lib/data"
import { ArrowLeft, Share2, Music, Lightbulb, MessageSquare } from "lucide-react"

export default function Results() {
  const params = useParams()
  const moodId = params.moodId as string

  const [mood, setMood] = useState(moods.find((m) => m.id === moodId) || moods[0])
  const [roast, setRoast] = useState("")
  const [moodDistractions, setMoodDistractions] = useState<typeof distractions>([])
  const [playlist, setPlaylist] = useState<(typeof playlists)[0] | null>(null)

  useEffect(() => {
    // Find the mood
    const currentMood = moods.find((m) => m.id === moodId) || moods[0]
    setMood(currentMood)

    // Get a random roast for this mood
    const moodRoasts = roasts.filter((r) => r.moodId === moodId)
    const randomRoast = moodRoasts[Math.floor(Math.random() * moodRoasts.length)]
    setRoast(randomRoast?.text || "No roast found for this mood. You're too unique to roast.")

    // Get distractions for this mood
    const filteredDistractions = distractions.filter((d) => d.moodId === moodId)
    setMoodDistractions(filteredDistractions)

    // Get playlist for this mood
    const moodPlaylist = playlists.find((p) => p.moodId === moodId)
    setPlaylist(moodPlaylist || null)
  }, [moodId])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="mb-8 flex items-center">
            <Link href="/mood-selector">
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <span className="mr-2">{mood?.emoji}</span>
                {mood?.name}
              </h1>
              <p className="text-muted-foreground">{mood?.description}</p>
            </div>
          </div>

          <Tabs defaultValue="roast" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="roast" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Roast
              </TabsTrigger>
              <TabsTrigger value="distractions" className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Distractions
              </TabsTrigger>
              <TabsTrigger value="playlist" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                Playlist
              </TabsTrigger>
            </TabsList>

            <TabsContent value="roast" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Brutal Roast</CardTitle>
                  <CardDescription>The truth hurts, but so does loneliness. Pick your poison.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-muted p-6">
                    <p className="text-lg">{roast}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="shake-button">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share This Roast
                  </Button>
                  <Link href="/mood-selector">
                    <Button variant="secondary">Try Another Mood</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="distractions" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Distraction Toolkit</CardTitle>
                  <CardDescription>Here are some chaotic ways to cope with your current state.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {moodDistractions.map((distraction, index) => (
                      <div key={index} className="rounded-lg border p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {distraction.type === "absurd" && (
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-500/20 text-purple-500">
                              Absurd
                            </span>
                          )}
                          {distraction.type === "chaotic" && (
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-orange-500/20 text-orange-500">
                              Chaotic
                            </span>
                          )}
                          {distraction.type === "wholesome" && (
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/20 text-green-500">
                              Wholesome
                            </span>
                          )}
                        </div>
                        <p>{distraction.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full shake-button">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share These Distractions
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="playlist" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>{playlist?.name || "Playlist"}</CardTitle>
                  <CardDescription>Songs that match your chaotic energy.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border">
                    <div className="p-4 border-b bg-muted/50">
                      <h3 className="font-bold text-lg">{playlist?.name}</h3>
                      <p className="text-sm text-muted-foreground">A playlist for your {mood?.name} mood</p>
                    </div>
                    <ul className="divide-y">
                      {playlist?.tracks.map((track, index) => (
                        <li key={index} className="p-4 flex justify-between items-center">
                          <div>
                            <p className="font-medium">{track.title}</p>
                            <p className="text-sm text-muted-foreground">{track.artist}</p>
                          </div>
                          <span className="text-muted-foreground">{index + 1}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full shake-button">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share This Playlist
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

