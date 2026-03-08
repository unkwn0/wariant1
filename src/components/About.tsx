import { useFadeIn } from "@/hooks/useAnimations";

export default function About() {
  const f1 = useFadeIn();
  const f2 = useFadeIn();

  return (
    <section id="o-nas" className="py-24 bg-g-bgAlt scroll-mt-20" aria-label="O firmie GRANBET">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-g-textLight text-center">O firmie GRANBET</h2>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            ref={f1.ref}
            className={`transition-all duration-700 ${f1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <p className="font-inter text-lg text-g-textLight leading-relaxed mb-4">
              Rozumiemy, że wybór nagrobka to jedna z najtrudniejszych decyzji w życiu. Dlatego od ponad 35 lat
              towarzyszymy rodzinom z Hrubieszowa i okolic — bez pośpiechu, z szacunkiem i pełnym zaangażowaniem.
            </p>
            <p className="font-inter text-lg text-g-textLight leading-relaxed">
              Zakład produkcyjny GRANBET mieści się w Kryłowie przy trasie Hrubieszów–Dołhobyczów. Każdy nagrobek
              wykonujemy własnoręcznie — od projektu przez produkcję po montaż na cmentarzu.
            </p>
          </div>
          <div
            ref={f2.ref}
            className={`transition-all duration-700 ${f2.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div
              className="aspect-[4/3] bg-stone-600 rounded-xl overflow-hidden flex items-center justify-center"
              role="img"
              aria-label="Zakład kamieniarski GRANBET w Kryłowie – widok warsztatu"
            >
              <span className="text-sm text-stone-400">Zdjęcie zakładu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}