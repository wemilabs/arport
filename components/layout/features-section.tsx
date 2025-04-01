import { FeatureCard } from "@/components/layout/feature-card";
import { features } from "@/lib/data";

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Use Arport?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon, title, description }) => (
            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
