const Footer = () => {
  return (
    <footer className="mt-20 border-t">
      <div className="container mx-auto grid gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg">Your Farm Name</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            123 Country Lane, Yourtown, ST 12345
          </p>
          <p className="text-sm text-muted-foreground">Open by appointment</p>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href="mailto:info@yourfarm.com" className="hover:underline">info@yourfarm.com</a>
            </li>
            <li>
              <a href="tel:+11234567890" className="hover:underline">(123) 456-7890</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Follow</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} Your Farm Name. All rights reserved.</p>
          <p>
            <a href="#contact" className="hover:underline">Get in touch</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
