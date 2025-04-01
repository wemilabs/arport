import Link from "next/link";
import { SearchBar } from "@/components/search/search-bar";
import { TypingAnimation } from "@/components/layout/typing-animation";

export function Hero() {
  return (
    <>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <section className="min-h-[80vh] flex flex-col items-center justify-center space-y-8 px-4 py-16">
        <div className="max-w-4xl w-full text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            The most comprehensive unified space for{" "}
            <span className="font-mono text-primary bg-primary/10">
              <TypingAnimation />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover, explore, and access academic papers from top journals and
            databases.
          </p>
          <div className="flex justify-center pt-6 relative">
            <SearchBar />
          </div>
          <div className="pt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Popular:</span>
            <div className="flex gap-2">
              {["Machine Learning", "Climate Change", "Quantum Physics"].map(
                (topic) => (
                  <Link
                    key={topic}
                    href={`/search?q=${encodeURIComponent(topic)}`}
                    className="px-3 py-1 bg-muted/50 hover:bg-muted rounded-full text-sm transition-colors"
                  >
                    {topic}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
