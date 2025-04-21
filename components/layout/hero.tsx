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
          <div>
            <h1 className="text-3xl md:text-6xl font-bold tracking-tighter text-foreground">
              The most comprehensive unified{" "}
            </h1>
            <div className="flex items-center justify-center gap-x-2 w-[90%] mx-auto">
              <h1 className="flex-1 text-right text-3xl md:text-6xl font-bold tracking-tighter text-foreground">
                space for
              </h1>
              <div className="flex-1 text-left bg-primary/10 rounded-full pl-4">
                <h1 className="text-3xl md:text-6xl font-bold tracking-tighter font-mono text-primary">
                  <TypingAnimation />
                </h1>
              </div>
            </div>
          </div>

          <p className="md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover, explore, and access academic papers from top journals and
            databases.
          </p>

          <div className="flex justify-center pt-6 relative">
            <SearchBar />
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground">
            <span>Popular:</span>
            <div className="flex gap-2">
              {["Machine Learning", "Climate Change", "Quantum Physics"].map(
                (topic) => (
                  <Link
                    key={topic}
                    href={`/search?q=${encodeURIComponent(topic)}`}
                    className="px-3 py-1 bg-muted/50 hover:bg-muted rounded-full text-xs md:text-sm transition-colors"
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
