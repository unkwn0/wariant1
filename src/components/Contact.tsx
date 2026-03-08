import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useFadeIn } from "@/hooks/useAnimations";

export default function Contact() {
  const f = useFadeIn();

  return (
    <section id="kontakt" className="py-24 bg-g-bgAlt scroll-mt-20" aria-label="Kontakt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-g-textLight text-center">Skontaktuj się z nami</h2>
        <p className="font-inter text-lg text-g-textMuted text-center mt-2">
          Odwiedź nas, zadzwoń lub napisz — jesteśmy do dyspozycji
        </p>
        <div className="w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12" />

        <div
          ref={f.ref}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${
            f.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-xl text-g-gold font-bold mb-4">Zakład produkcyjny — Kryłów</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-g-gold mt-1 flex-shrink-0" />
                  <span className="font-inter text-g-textLight">ul. Hrubieszowska 33, 22-540 Kryłów</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-g-gold flex-shrink-0" />
                  <a href="tel:+48502480543" className="font-inter text-g-textLight hover:text-g-gold transition-colors">502 480 543</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-g-gold flex-shrink-0" />
                  <a href="mailto:granbet@vp.pl" className="font-inter text-g-textLight hover:text-g-gold transition-colors">granbet@vp.pl</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-xl text-g-gold font-bold mb-4">Biuro handlowe — Hrubieszów</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-g-gold mt-1 flex-shrink-0" />
                  <span className="font-inter text-g-textLight">ul. Nowa 10, 22-500 Hrubieszów</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-g-gold flex-shrink-0" />
                  <a href="tel:+48697994924" className="font-inter text-g-textLight hover:text-g-gold transition-colors">697 994 924</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-xl text-g-gold font-bold mb-4">Godziny otwarcia</h3>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-g-gold mt-1 flex-shrink-0" />
                <div className="font-inter text-g-textLight">
                  <p>Poniedziałek – Piątek: 7:00 – 17:00</p>
                  <p>Sobota: 7:00 – 15:00</p>
                  <p className="text-g-textMuted">Niedziela: zamknięte</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            action="https://formspree.io/f/PLACEHOLDER_ID"
            method="POST"
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block font-inter text-sm text-g-textMuted mb-1">Imię i nazwisko</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-g-card border border-g-cardHover rounded-lg px-4 py-3 text-g-textLight font-inter placeholder:text-g-textMuted focus:border-g-gold focus:outline-none transition-colors"
                placeholder="Jan Kowalski"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-inter text-sm text-g-textMuted mb-1">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-g-card border border-g-cardHover rounded-lg px-4 py-3 text-g-textLight font-inter placeholder:text-g-textMuted focus:border-g-gold focus:outline-none transition-colors"
                placeholder="500 000 000"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-inter text-sm text-g-textMuted mb-1">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-g-card border border-g-cardHover rounded-lg px-4 py-3 text-g-textLight font-inter placeholder:text-g-textMuted focus:border-g-gold focus:outline-none transition-colors"
                placeholder="jan@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-inter text-sm text-g-textMuted mb-1">Wiadomość</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-g-card border border-g-cardHover rounded-lg px-4 py-3 text-g-textLight font-inter placeholder:text-g-textMuted focus:border-g-gold focus:outline-none transition-colors resize-none"
                placeholder="Opisz, w czym możemy pomóc..."
              />
            </div>
            <button
              type="submit"
              className="bg-g-gold text-g-bg font-bold px-10 min-h-[52px] rounded-lg hover:bg-g-goldHover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(198,168,90,0.35)] transition-all duration-200 w-full"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}