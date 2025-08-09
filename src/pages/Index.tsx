import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import Seo from "@/components/Seo";
import lambDishes from "@/assets/lamb-dishes.jpg";
import farmers from "@/assets/farmers.jpg";
import { Button } from "@/components/ui/button";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Your Farm Name",
    url: "https://yourfarm.com/",
    description: "Pasture-raised lamb from our family farm to your plate.",
    image: [
      new URL(lambDishes, window.location.origin + import.meta.env.BASE_URL).toString(),
      new URL(farmers, window.location.origin + import.meta.env.BASE_URL).toString()
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Country Lane",
      addressLocality: "Yourtown",
      addressRegion: "ST",
      postalCode: "12345",
      addressCountry: "US"
    },
    telephone: "+11234567890",
    sameAs: [],
    areaServed: "Local pickup and regional delivery",
    makesOffer: {
      "@type": "Offer",
      name: "Pasture-raised lamb boxes",
      priceCurrency: "USD"
    }
  };

  return (
    <>
      <Seo
        title="Pasture-Raised Lamb | Your Farm Name"
        description="From our fields to your family table — premium, pasture-raised lamb you can trust."
        canonical={window.location.origin + import.meta.env.BASE_URL.replace(/\/$/, '')}
        jsonLd={structuredData}
      />
      <Navbar />
      <main id="content">
        <Hero />

        <section id="lamb" className="container mx-auto px-4 py-20">
          <header className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl">Our Lamb</h2>
            <p className="mt-3 text-muted-foreground">
              Carefully raised, with a focus on animal wellbeing and low stress stock handling.
            </p>
          </header>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <article className="rounded-lg border p-6 glass-panel shadow-elevated">
              <h3 className="font-medium">Quarter Lamb Box</h3>
              <p className="mt-2 text-sm text-muted-foreground">~20–25 lbs assorted cuts</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Selection of pre-allocated cuts</li>
                <li>Natural casing, GF sausages</li>
                <li>Flash frozen & vacuum sealed</li>
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <span className="text-lg font-semibold">$21/kg</span>
                  <p className="text-xs text-muted-foreground">$80 deposit required</p>
                </div>
                <Button asChild variant="outline"><a href="#contact">Enquire</a></Button>
              </div>
            </article>
            <article className="rounded-lg border p-6 glass-panel shadow-elevated">
              <h3 className="font-medium">Half Lamb Box</h3>
              <p className="mt-2 text-sm text-muted-foreground">~40–50 lbs assorted cuts</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Select your own cuts</li>
                <li>Natural casing, GF sausages</li>
                <li>Flash frozen & vacuum sealed</li>
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <span className="text-lg font-semibold">$19/kg</span>
                  <p className="text-xs text-muted-foreground">$100 deposit required</p>
                </div>
                <Button asChild variant="outline"><a href="#contact">Enquire</a></Button>
              </div>
            </article>
            <article className="rounded-lg border p-6 glass-panel shadow-elevated">
              <h3 className="font-medium">Whole Lamb Box</h3>
              <p className="mt-2 text-sm text-muted-foreground">~40–50 lbs assorted cuts</p>
              <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Select your own cuts</li>
                <li>Natural casing, GF sausages</li>
                <li>Flash frozen & vacuum sealed</li>
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <span className="text-lg font-semibold">$17/kg</span>
                  <p className="text-xs text-muted-foreground">$200 deposit required</p>
                </div>
                <Button asChild variant="outline"><a href="#contact">Enquire</a></Button>
              </div>
            </article>
            <figure className="overflow-hidden rounded-lg border bg-card">
              <img
                src={lambDishes}
                alt="Farm-to-table lamb dishes with herbs and seasonal vegetables"
                loading="lazy"
                className="size-full object-cover"
              />
            </figure>
          </div>
        </section>

        <section id="how" className="bg-secondary/40 py-20">
          <div className="container mx-auto px-4">
            <header className="max-w-2xl">
              <h2 className="font-heading text-3xl md:text-4xl">How It Works</h2>
              <p className="mt-3 text-muted-foreground">Simple, transparent, and local.</p>
            </header>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {["Reserve", "We Raise & Process", "Pickup & Enjoy"].map((step, i) => (
                <article key={step} className="rounded-lg border p-6 bg-card">
                  <div className="size-8 rounded-full bg-primary text-primary-foreground grid place-items-center">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-medium">{step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {i === 0 && "Send us a note with what you’d like. We’ll confirm availability and timing."}
                    {i === 1 && "Lambs are grass-fed at the farm, we then personally oversee transport and processing by a licenced butcher."}
                    {i === 2 && "Pick up at a local drop. Enjoy honest food raised right."}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <figure className="overflow-hidden rounded-lg border bg-card order-last md:order-first">
              <img
                src={farmers}
                alt="Family farmers standing in a pasture with sheep grazing"
                loading="lazy"
                className="size-full object-cover"
              />
            </figure>
            <article>
              <h2 className="font-heading text-3xl md:text-4xl">About Our Farm</h2>
              <p className="mt-4 text-muted-foreground">
                We’re a small family farm located in the Southern Tablelands, New South Wales. With a strong focus on regenerative agriculture and animal wellbeing, we ensure that our lambs are raised right.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline"><a href="#contact">Visit or Contact Us</a></Button>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="bg-secondary/40 py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl">Contact</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Ready to reserve a box or have questions? We’d love to hear from you.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-lg border p-6 bg-card">
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">We reply within 1–2 days.</p>
                <div className="mt-4">
                  <Button asChild variant="hero"><a href="mailto:info@yourfarm.com">studley.park264@gmail.com</a></Button>
                </div>
              </article>
              <article className="rounded-lg border p-6 bg-card">
                <h3 className="font-medium">Check Next Availability</h3>
                <p className="text-sm text-muted-foreground">Fill out a quick form and we can get back to you with our next delivery date!</p>
                <div className="mt-4">
                  <Button asChild variant="hero"><a href="https://docs.google.com/forms/d/e/1FAIpQLSccGIhJjRSEGv0fZTCNk-EpTEKMc_H3-nQB11lKB7o-Fq7F8Q/viewform">Enquiry Form</a></Button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
