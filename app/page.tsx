import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glitch-effect"
                  data-text="Loneliness Eliminator 3000"
                >
                  Loneliness Eliminator 3000
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl typewriter">
                  The sarcastic mental health tool you didn&apos;t ask for but definitely need.
                </p>
              </div>
              <div className="space-y-2 mt-6">
                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
                  Feeling lonely? Bored? Existentially confused? <br />
                  We&apos;ve got you covered with brutal honesty and chaotic energy.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/mood-selector">
                  <Button variant="glitch" size="lg" className="text-lg">
                    Eliminate Loneliness Now
                  </Button>
                </Link>
                <Link href="/daily-check-in">
                  <Button variant="outline" size="lg" className="text-lg shake-button">
                    Daily Mood Check-in
                  </Button>
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
                <div className="flex flex-col items-center space-y-2 border border-border p-4 rounded-lg">
                  <h3 className="text-xl font-bold">Mood Selector</h3>
                  <p className="text-muted-foreground text-center">
                    Choose from 12+ chaotic moods like &apos;Clown Energy&apos; and &apos;Peak Desperate&apos;
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-border p-4 rounded-lg">
                  <h3 className="text-xl font-bold">Savage Roasts</h3>
                  <p className="text-muted-foreground text-center">
                    Get brutally honest feedback that somehow makes you feel better
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-border p-4 rounded-lg">
                  <h3 className="text-xl font-bold">Chaotic Coping</h3>
                  <p className="text-muted-foreground text-center">
                    Absurd challenges and weird self-care tips that actually work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

