import { Gem, Landmark, Camera, ArrowUpFromLine, Flame, Wrench } from "lucide-react";
import { useFadeIn } from "@/hooks/useAnimations";

const SERVICES = [
  { icon: Gem, title: "Nagrobki granitowe", desc: "Pomagamy godnie upamiętniać bliskich — tradycyjne i nowoczesne, z naturalnego granitu." },
  { icon: Landmark, title: "Grobowce rodzinne", desc: "Trwałe grobowce dla rodzin — służące kolejnym pokoleniom." },
  { icon: Camera, title: "Fotoceramika", desc: "Zdjęcia w krysztale i porcelanie — wizerunek zachowany na wieki." },
  { icon: ArrowUpFromLine, title: "Schody, parapety, blaty", desc: "Elementy granitowe do wnętrz i ogrodów — estetyczne i trwałe." },
  { icon: Flame, title: "Kominki i tarasy", desc: "Granitowe obudowy kominków, tarasy, chodniki z kostki." },
  { icon: Wrench, title: "Renowacje", desc: "Przywracamy nagrobkom dawny blask — czyszczenie i konserwacja kamienia." },
];

export default function Offer() {
  const f = useFadeIn();

  return (
    <section id="oferta" className="py-24 bg-g-bg scroll-mt-20" aria-label="Oferta usług">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-g-textLight text-center">Jak możemy pomóc?</h2>
        <p className="font-inter text-lg text-g-textMuted text-center mt-2">
          Wykonujemy z kamienia wszystko, czego potrzebujesz
        </p>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />

        <div
          ref={f.ref}
          className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 transition-all duration-700 ${
            f.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="bg-g-card border-t-4 border-g-gold p-6 rounded-lg hover:-translate-y-[5px] hover:shadow-[0_14px_36px_rgba(198,168,90,0.22)] hover:border-t-g-goldHover transition-all duration-[250ms]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <s.icon className="w-8 h-8 text-g-gold mb-3" />
              <h3 className="font-playfair text-lg text-g-textLight font-bold mb-2">{s.title}</h3>
              <p className="font-inter text-base text-g-textDim leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}