import { MessageCircle, PenTool, Hammer, CheckCircle, ArrowRight } from "lucide-react";
import { useFadeIn } from "@/hooks/useAnimations";

const STEPS = [
  { icon: MessageCircle, num: "01", title: "Konsultacja", desc: "Zadzwoń, napisz lub odwiedź nas osobiście. Wysłuchamy i doradzimy bez żadnej presji." },
  { icon: PenTool, num: "02", title: "Projekt", desc: "Wspólnie zaprojektujemy nagrobek dopasowany do Twoich potrzeb i budżetu." },
  { icon: Hammer, num: "03", title: "Realizacja", desc: "Wykonujemy nagrobek we własnym zakładzie w Kryłowie — pełna kontrola jakości." },
  { icon: CheckCircle, num: "04", title: "Montaż", desc: "Dowozimy i montujemy nagrobek na cmentarzu. Pełna obsługa w cenie." },
];

export default function Process() {
  const f = useFadeIn();

  return (
    <section id="proces" className="py-24 bg-g-bgAlt scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-g-textLight text-center">Jak wygląda nasza współpraca?</h2>
        <p className="font-inter text-lg text-g-textMuted text-center mt-2">
          Krok po kroku — od pierwszego kontaktu do gotowego nagrobka
        </p>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />

        <div
          ref={f.ref}
          className={`flex flex-col lg:flex-row items-stretch gap-4 transition-all duration-700 ${
            f.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {STEPS.map((s, i) => (
            <div key={i} className="contents">
              <div className="relative bg-g-card border-2 border-g-cardHover rounded-xl p-7 flex-1 hover:border-g-gold hover:bg-g-cardHover transition-all duration-200">
                <span className="font-playfair text-5xl text-g-gold/15 absolute top-2 right-4 select-none">
                  {s.num}
                </span>
                <s.icon className="w-8 h-8 text-g-gold mb-3" />
                <h3 className="font-playfair text-xl text-g-textLight font-bold mb-2">{s.title}</h3>
                <p className="font-inter text-base text-g-textDim leading-relaxed">{s.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:flex items-center justify-center flex-shrink-0 mx-2">
                  <ArrowRight className="w-6 h-6 text-g-gold" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="tel:+48502480543"
            className="bg-g-gold text-g-bg px-10 min-h-[52px] rounded-lg inline-flex items-center justify-center font-bold text-lg hover:bg-g-goldHover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(198,168,90,0.35)] transition-all duration-200"
          >
            Zadzwoń i umów konsultację
          </a>
        </div>
      </div>
    </section>
  );
}