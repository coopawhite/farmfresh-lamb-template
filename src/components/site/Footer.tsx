const Footer = () => {
  return (
    <footer className="mt-20 border-t">
      <div className="container mx-auto grid gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg">Studley Park Farm</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href="mailto:studley.park264@gmail.com" className="hover:underline">studley.park264@gmail.com</a>
            </li>
          </ul>
        </div>
        <div>

        </div>
        <div>
          <h4 className="font-medium">Follow</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href="https://www.instagram.com/studleyparkfarm/" className="hover:underline">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} Studley Park Farm. All rights reserved.</p>
          <p>
            <a href="#contact" className="hover:underline">Get in touch</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
