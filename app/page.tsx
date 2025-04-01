import { Hero } from "@/components/layout/hero";
import { Features } from "@/components/layout/features-section";
import { CTA } from "@/components/layout/cta";

// TODO: Also think of the proper structure for the dashboard, as things should vary according to the user role
// TODO: Dynamically hide things, or differents dashboard folders according to user role?

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <CTA />
    </div>
  );
}
