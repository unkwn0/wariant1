import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  { q: "Jak zamówić nagrobek w GRANBET?", a: "Wystarczy zadzwonić pod numer 502 480 543 lub odwiedzić nas w Kryłowie albo Hrubieszowie. Razem omówimy projekt, materiał i termin realizacji." },
  { q: "Ile kosztuje nagrobek granitowy?", a: "Cena zależy od wybranego granitu, rozmiaru i zdobień. Zapraszamy na bezpłatną konsultację — dopasujemy projekt do budżetu." },
  { q: "Jak długo czeka się na wykonanie nagrobka?", a: "Standardowy czas realizacji wynosi 4–8 tygodni od zatwierdzenia projektu. Prostsze modele mogą być gotowe szybciej." },
  { q: "Czy GRANBET wykonuje renowacje starych nagrobków?", a: "Tak — oferujemy czyszczenie, odświeżenie napisów, wymianę elementów i konserwację kamienia." },
  { q: "Gdzie znajdę zakład kamieniarski w Hrubieszowie?", a: "Biuro handlowe GRANBET przy ul. Nowej 10 w Hrubieszowie. Zakład produkcyjny w Kryłowie przy trasie Hrubieszów–Dołhobyczów." },
  { q: "Czy GRANBET obsługuje klientów z całego powiatu hrubieszowskiego?", a: "Tak — obsługujemy Hrubieszów, Kryłów, Dołhobyczów i cały powiat hrubieszowski. Dowozimy i montujemy nagrobki na miejscu." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-g-bg scroll-mt-20" aria-label="Najczęściej zadawane pytania">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-g-textLight text-center">Najczęściej zadawane pytania</h2>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="bg-g-faq rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-inter text-[17px] text-g-textLight font-semibold pr-4">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-g-gold flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 font-inter text-base text-g-textDim leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}