import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to dive in?</h2>
        <p className="text-xl text-muted-foreground">
          Start your academic journey with our powerful research tools.
        </p>
        <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/search">Start Searching</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
