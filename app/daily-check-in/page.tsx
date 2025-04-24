"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { moods } from "@/lib/data"
import { ArrowLeft, Calendar, TrendingUp, Save } from "lucide-react"

export default function DailyCheckIn() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [savedMoods, setSavedMoods] = useState<{ date: string; moodId: string }[]>([])
  const [saved, setSaved] = useState(false)

  const handleSaveMood = () => {
    if (!selectedMood) return

    const today = new Date().toISOString().split("T")[0]
    const newMoodEntry = { date: today, moodId: selectedMood }

    setSavedMoods([...savedMoods, newMoodEntry])
    setSaved(true)

    // In a real app, we would save this to Vercel KV or another database
    localStorage.setItem("savedMoods", JSON.stringify([...savedMoods, newMoodEntry]))
  }

  // Generate some mock mood history data
  const getMoodTrend = () => {
    const trends = [
      "Emotional Yo-Yo Champion of the Week",
      "Consistently Chaotic (It's a vibe)",
      "Surprisingly Stable (Are you okay?)",
      "Downward Spiral Enthusiast",
      "Mood Swing Gold Medalist",
    ]

    return trends[Math.floor(Math.random() * trends.length)]
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="mb-8 flex items-center">
            <Link href="/">
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Daily Mood Check-in</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Today's Mood
                </CardTitle>
                <CardDescription>How are you feeling today? Be honest, we'll judge you either way.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {moods.slice(0, 6).map((mood) => (
                    <button
                      key={mood.id}
                      className={`flex flex-col items-center justify-center rounded-lg border border-border p-4 text-center transition-all hover:border-primary hover:shadow-md ${
                        selectedMood === mood.id ? "border-primary bg-primary/10" : ""
                      }`}
                      onClick={() => setSelectedMood(mood.id)}
                    >
                      <span className="mb-2 text-3xl">{mood.emoji}</span>
                      <h3 className="text-sm font-medium">{mood.name}</h3>
                    </button>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSaveMood} disabled={!selectedMood || saved} variant="glitch" className="w-full">
                  <Save className="mr-2 h-4 w-4" />
                  {saved ? "Mood Saved" : "Save Today's Mood"}
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Your Mood Trends
                </CardTitle>
                <CardDescription>Brutally honest analysis of your emotional state.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold text-lg mb-2">Weekly Mood Analysis</h3>
                  <p className="text-muted-foreground mb-4">Based on your recent check-ins:</p>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <p className="text-xl font-bold">{getMoodTrend()}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Check in daily for more accurate (and savage) mood tracking.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full shake-button">
                  View Full Mood History
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

