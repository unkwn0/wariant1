import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "O nas", href: "#o-nas" },
  { label: "Oferta", href: "#oferta" },
  { label: "Opinie", href: "#opinie" },
  { label: "Galeria", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-g-bg shadow-[0_2px_16px_rgba(0,0,0,0.5)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between h-20">
          <div>
            <span className="font-playfair font-bold text-2xl text-g-textLight">GRANBET</span>
            <span className="block font-cormorant text-[13px] text-g-gold">
              Zakład Kamieniarski od 1988 r.
            </span>
          </div>
          <nav className="flex items-center gap-6" role="navigation" aria-label="Menu główne">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-inter text-base text-g-textLight hover:text-g-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+48502480543"
            className="bg-g-gold text-g-bg font-bold text-[17px] px-5 py-2.5 rounded-lg hover:bg-g-goldHover transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> 502 480 543
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between h-16">
          <span className="font-playfair font-bold text-xl text-g-textLight">GRANBET</span>
          <div className="flex items-center gap-3">
            <a href="tel:+48502480543" className="font-bold text-base text-g-gold flex items-center gap-1">
              <Phone className="w-4 h-4" /> 502 480 543
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Otwórz menu nawigacji"
              className="text-g-gold"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-g-bg z-50 flex flex-col items-center justify-center md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Zamknij menu"
            className="absolute top-5 right-5 text-g-gold"
          >
            <X className="w-8 h-8" />
          </button>
          <nav className="flex flex-col items-center gap-2" role="navigation" aria-label="Menu mobilne">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-inter text-xl text-g-textLight py-4 hover:text-g-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}