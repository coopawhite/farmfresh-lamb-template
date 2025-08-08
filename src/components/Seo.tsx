import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
};

const Seo = ({ title, description, canonical, jsonLd }: Props) => {
  useEffect(() => {
    if (title) document.title = title;

    const ensureMeta = (name: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      return el as HTMLMetaElement;
    };

    const descTag = ensureMeta("description");
    descTag.setAttribute("content", description);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    if (jsonLd) {
      let script = document.getElementById("ldjson") as HTMLScriptElement | null;
      if (!script) {
        const newScript = document.createElement("script");
        newScript.id = "ldjson";
        newScript.type = "application/ld+json";
        document.head.appendChild(newScript);
        script = newScript;
      }
      script.text = JSON.stringify(jsonLd);
    }
  }, [title, description, canonical, jsonLd]);

  return null;
};

export default Seo;
