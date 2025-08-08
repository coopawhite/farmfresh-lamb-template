import heroImage from "@/assets/hero-farm.jpg";
import { Button } from "@/components/ui/button";
import { MouseEvent } from "react";

const Hero = () => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mx", `${mx}%`);
    e.currentTarget.style.setProperty("--my", `${my}%`);
  };

  return (
    <section id="home" aria-label="Pasture-raised lamb farm hero" data-hero onMouseMove={handleMouseMove} className="relative">
      <div className="relative min-h-[72vh] grid place-items-center">
        <img
          src={heroImage}
          alt="Rolling green hills with a flock of sheep and a rustic barn at golden hour"
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/20" />

        <div className="relative container mx-auto text-center px-4 py-24">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-1 text-xs text-muted-foreground glass-panel">
            Pasture-raised • Grass-fed • Ethically harvested
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-heading font-semibold">
            Farm to Plate Lamb, Raised With Care
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            From our fields to your family table — premium, pasture-raised lamb you can trust.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#lamb" aria-label="Shop lamb boxes">Shop Lamb Boxes</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#how" aria-label="Learn how farm to plate works">How It Works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
