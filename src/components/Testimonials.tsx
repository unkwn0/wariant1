import { Star } from "lucide-react";
import { useFadeIn } from "@/hooks/useAnimations";

const REVIEWS = [
  {
    text: "Jesteśmy bardzo wdzięczni za pomoc i profesjonalne podejście. Nagrobek wykonany dokładnie według naszych życzeń — na czas i w dobrej cenie.",
    author: "Rodzina K., Hrubieszów",
  },
  {
    text: "Obsługa z sercem — czuliśmy się zaopiekowani na każdym etapie. Cierpliwie doradzono nam wybór granitu i napisu. Nagrobek jest piękny i trwały.",
    author: "Rodzina W., Kryłów",
  },
  {
    text: "Solidny zakład kamieniarski. Terminowość, jakość i ludzkie podejście — wszystko na najwyższym poziomie. Polecamy.",
    author: "Rodzina N., Dołhobyczów",
  },
];

export default function Testimonials() {
  const f = useFadeIn();

  return (
    <section id="opinie" className="py-24 bg-g-bg scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-g-textLight text-center">Co mówią nasi klienci</h2>
        <p className="font-inter text-lg text-g-textMuted text-center mt-2">
          Opinie rodzin, którym towarzyszyliśmy
        </p>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />

        <div
          ref={f.ref}
          className={`grid lg:grid-cols-3 grid-cols-1 gap-6 transition-all duration-700 ${
            f.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {REVIEWS.map((r, i) => (
            <blockquote
              key={i}
              className="bg-g-card border-l-4 border-g-gold rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(198,168,90,0.22)] transition-all duration-[250ms]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-3" aria-label="Ocena 5 na 5 gwiazdek">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-g-gold fill-g-gold" aria-hidden="true" />
                ))}
              </div>
              <p className="font-inter text-[17px] text-g-textLight italic leading-relaxed mb-4">
                „{r.text}"
              </p>
              <cite className="font-cormorant text-base text-g-gold font-semibold not-italic">
                — {r.author}
              </cite>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://g.page/r/PLACEHOLDER/review"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-g-gold text-g-gold px-8 min-h-[48px] rounded-lg inline-flex items-center justify-center hover:bg-g-gold hover:text-g-bg transition-all duration-200"
          >
            Wystaw opinię w Google →
          </a>
        </div>
      </div>
    </section>
  );
}