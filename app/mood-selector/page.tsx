"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { moods } from "@/lib/data"
import { ArrowLeft } from "lucide-react"

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

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
            <h1 className="text-3xl font-bold">How are you feeling today?</h1>
          </div>
          <p className="mb-8 text-lg text-muted-foreground">
            Select your current mood. Be honest, we&apos;re going to roast you anyway.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {moods.map((mood) => (
              <button
                key={mood.id}
                className={`flex flex-col items-center justify-center rounded-lg border border-border p-6 text-center transition-all hover:border-primary hover:shadow-md ${
                  selectedMood === mood.id ? "border-primary bg-primary/10" : ""
                }`}
                onClick={() => setSelectedMood(mood.id)}
              >
                <span className="mb-2 text-4xl">{mood.emoji}</span>
                <h3 className="mb-1 text-xl font-bold">{mood.name}</h3>
                <p className="text-sm text-muted-foreground">{mood.description}</p>
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href={selectedMood ? `/results/${selectedMood}` : "#"}>
              <Button variant="glitch" size="lg" className="text-lg" disabled={!selectedMood}>
                Analyze My Pathetic State
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

