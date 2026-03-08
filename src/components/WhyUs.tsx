import { Check } from "lucide-react";
import { useCountUp, useFadeIn } from "@/hooks/useAnimations";

const STATS = [
  { end: 35, suffix: "+", label: "Lat nieprzerwanej działalności", aria: "35 plus lat doświadczenia" },
  { end: 500, suffix: "+", label: "Rodzin, którym pomogliśmy", aria: "Ponad 500 rodzin" },
  { end: 3, suffix: "", label: "Lokalizacje obsługi klientów", aria: "3 lokalizacje" },
  { end: 100, suffix: "%", label: "Własna produkcja w Kryłowie", aria: "100 procent własna produkcja" },
];

const BULLETS = [
  "35 lat doświadczenia",
  "Setki zrealizowanych nagrobków i pomników",
  "Indywidualne podejście do każdego zlecenia",
  "Terminowość i rzetelność",
  "Obsługa Hrubieszów, Kryłów i Dołhobyczów",
];

function StatCard({ end, suffix, label, aria }: (typeof STATS)[0]) {
  const { ref, value } = useCountUp(end);
  return (
    <div ref={ref} className="text-center" aria-label={aria}>
      <span className="font-playfair text-6xl md:text-7xl text-g-gold font-bold">
        {value}{suffix}
      </span>
      <p className="font-inter text-base text-g-textLight mt-2">{label}</p>
    </div>
  );
}

export default function WhyUs() {
  const f = useFadeIn();

  return (
    <section className="py-24 bg-g-bgAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-g-textLight text-center">Dlaczego rodziny nam ufają?</h2>
        <p className="font-inter text-lg text-g-textMuted text-center mt-2">
          Ponad 35 lat budujemy zaufanie jedną realizacją na raz
        </p>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        <div
          ref={f.ref}
          className={`mt-12 grid lg:grid-cols-2 gap-x-12 gap-y-3 transition-all duration-700 ${
            f.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {BULLETS.map((b) => (
            <div key={b} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-g-gold flex-shrink-0" />
              <span className="font-inter text-[17px] text-g-textLight">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}