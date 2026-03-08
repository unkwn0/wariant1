export default function Footer() {
  return (
    <footer className="bg-g-footer border-t-2 border-g-gold py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="font-playfair font-bold text-2xl text-g-textLight">GRANBET</span>
            <p className="font-cormorant text-sm text-g-gold mt-1">Zakład Kamieniarski od 1988 r.</p>
            <p className="font-inter text-sm text-g-textMuted mt-3">
              Nagrobki granitowe, grobowce, fotoceramika, schody i elementy kamienne.
            </p>
          </div>
          <div>
            <h4 className="font-playfair text-lg text-g-textLight font-bold mb-3">Lokalizacje</h4>
            <p className="font-inter text-sm text-g-textDim">Zakład: ul. Hrubieszowska 33, Kryłów</p>
            <p className="font-inter text-sm text-g-textDim">Biuro: ul. Nowa 10, Hrubieszów</p>
            <p className="font-inter text-sm text-g-textDim">Biuro: Dołhobyczów</p>
          </div>
          <div>
            <h4 className="font-playfair text-lg text-g-textLight font-bold mb-3">Kontakt</h4>
            <p className="font-inter text-sm text-g-textDim">
              <a href="tel:+48502480543" className="hover:text-g-gold transition-colors">☎ 502 480 543</a> (Kryłów)
            </p>
            <p className="font-inter text-sm text-g-textDim">
              <a href="tel:+48697994924" className="hover:text-g-gold transition-colors">☎ 697 994 924</a> (Hrubieszów)
            </p>
            <p className="font-inter text-sm text-g-textDim mt-1">
              <a href="mailto:granbet@vp.pl" className="hover:text-g-gold transition-colors">granbet@vp.pl</a>
            </p>
          </div>
        </div>
        <div className="border-t border-g-card pt-6 text-center">
          <p className="font-inter text-sm text-g-textMuted">
            © {new Date().getFullYear()} GRANBET Zakład Kamieniarski. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}