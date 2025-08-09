import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const links = [
  { href: "#lamb", label: "Our Lamb" },
  { href: "#how", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Your Farm Name"
            className="h-12 w-auto select-none"
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button asChild variant="hero" size="sm">
            <a href="#lamb" aria-label="Shop lamb boxes">Shop</a>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t">
          <div className="container mx-auto py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" size="sm" onClick={() => setOpen(false)}>
              <a href="#lamb">Shop</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
