import { ChevronDown } from "lucide-react";
import { useFadeIn } from "@/hooks/useAnimations";

export default function Hero() {
  const f1 = useFadeIn();
  const f2 = useFadeIn();

  return (
    <section className="relative min-h-[90dvh] flex items-center justify-center bg-gradient-to-b from-g-bg to-stone-800 overflow-hidden">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div
          ref={f1.ref}
          className={`transition-all duration-700 ${f1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="font-cormorant text-sm text-g-gold uppercase tracking-[5px] mb-4">EST. 1988</p>
          <h1 className="font-playfair text-7xl md:text-8xl text-g-textLight mb-2">GRANBET</h1>
          <h2 className="font-playfair text-2xl md:text-4xl text-g-gold mb-0">Zakład Kamieniarski</h2>
          <div className="w-24 h-0.5 bg-g-gold mx-auto my-6" />
          <p className="font-inter text-lg text-g-textWarm mb-10">
            Hrubieszów · Kryłów · Dołhobyczów — od 1988 roku
          </p>
        </div>
        <div
          ref={f2.ref}
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
            f2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#galeria"
            className="bg-g-gold text-g-bg font-bold px-8 min-h-[52px] rounded-lg hover:bg-g-goldHover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(198,168,90,0.35)] transition-all duration-200 inline-flex items-center justify-center"
          >
            Nasze realizacje
          </a>
          <a
            href="#kontakt"
            className="bg-transparent text-g-gold border-2 border-g-gold px-8 min-h-[52px] rounded-lg hover:bg-g-gold hover:text-g-bg transition-all duration-200 inline-flex items-center justify-center"
          >
            Porozmawiajmy
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <ChevronDown className="w-8 h-8 text-g-gold animate-bounce" />
      </div>
    </section>
  );
}