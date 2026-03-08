import { useState } from "react";
import { useFadeIn } from "@/hooks/useAnimations";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GALLERY_ITEMS = [
  { label: "Nagrobek granitowy – realizacja GRANBET", bg: "bg-stone-700" },
  { label: "Grobowiec rodzinny – realizacja GRANBET", bg: "bg-stone-600" },
  { label: "Fotoceramika – realizacja GRANBET", bg: "bg-stone-700" },
  { label: "Schody granitowe – realizacja GRANBET", bg: "bg-stone-600" },
  { label: "Nagrobek nowoczesny – realizacja GRANBET", bg: "bg-stone-700" },
  { label: "Kominek granitowy – realizacja GRANBET", bg: "bg-stone-600" },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const f = useFadeIn();

  return (
    <section id="galeria" className="py-24 bg-g-deep scroll-mt-20" aria-label="Galeria realizacji">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-g-textLight text-center">Nasze realizacje</h2>
        <p className="font-inter text-lg text-g-textMuted text-center mt-2">
          Każdy projekt to indywidualna historia
        </p>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />

        <div
          ref={f.ref}
          className={`grid md:grid-cols-3 grid-cols-2 gap-4 transition-all duration-700 ${
            f.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
              className={`${item.bg} aspect-[4/3] rounded-lg overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-200`}
              role="img"
              aria-label={item.label}
            >
              <span className="text-sm text-stone-400">{item.label}</span>
            </button>
          ))}
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={GALLERY_ITEMS.map((item) => ({
            src: "/placeholder.svg",
            alt: item.label,
          }))}
        />
      </div>
    </section>
  );
}