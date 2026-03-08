import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-g-navy border-t-2 border-g-gold">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl text-g-textLight mb-4">
          Porozmawiajmy o nagrobku dla Twojej rodziny
        </h2>
        <p className="font-inter text-lg text-g-textWarm mb-10">
          Zadzwoń — bez zobowiązań, bez pośpiechu. Jesteśmy tu, żeby pomóc.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+48502480543"
            className="bg-g-gold text-g-bg font-bold px-10 min-h-[52px] rounded-lg hover:bg-g-goldHover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(198,168,90,0.35)] transition-all duration-200 inline-flex items-center justify-center gap-2 text-lg"
          >
            <Phone className="w-5 h-5" /> 502 480 543
          </a>
          <a
            href="#kontakt"
            className="bg-transparent text-g-gold border-2 border-g-gold px-8 min-h-[52px] rounded-lg hover:bg-g-gold hover:text-g-bg transition-all duration-200 inline-flex items-center justify-center text-lg"
          >
            Napisz do nas
          </a>
        </div>
      </div>
    </section>
  );
}