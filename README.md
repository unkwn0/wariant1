# PROMPT FINALNY — WARIANT 1 „Ciemna Elegancja Premium"

# POLECENIE

Zbuduj kompletną, w pełni responsywną, jednostronicową aplikację React + Tailwind CSS
dla Zakładu Kamieniarskiego GRANBET. Wygeneruj WSZYSTKIE sekcje w jednym przebiegu.
Nie pomijaj żadnej sekcji — jest ich 14. Nie używaj osobnych plików CSS — wyłącznie
Tailwind utility classes i tailwind.config. Użyj TypeScript.

---

# KONTEKST PROJEKTU

Firma: Zakład Kamieniarski GRANBET — nagrobki, grobowce, fotoceramika, schody granitowe.
Działalność od 1988 roku. Lokalizacje: Kryłów (zakład produkcyjny), Hrubieszów
i Dołhobyczów (biura handlowe).

Grupa docelowa: osoby 50–75 lat, rodziny w trudnych emocjonalnych chwilach.
Ton komunikacji: empatyczny, ciepły, bez żargonu branżowego.
Styl wizualny: „Ciemna Elegancja Premium" — głęboka czerń, złote akcenty, prestiżowy
design. Cała strona jest ciemna — BEZ jasnych sekcji. Złoto #C6A85A jako jedyny akcent.

---

# ARCHITEKTURA TECHNICZNA

- Framework: React + TypeScript + Tailwind CSS
- Nawigacja: single-page z kotwicami (#o-nas, #oferta, #opinie, #galeria, #faq, #kontakt)
  — BEZ React Router
- SEO: react-helmet-async (meta tagi + JSON-LD LocalBusiness + JSON-LD FAQPage)
- Formularz: Formspree (action URL: https://formspree.io/f/PLACEHOLDER_ID)
- Galeria: yet-another-react-lightbox
- Ikony: lucide-react
- Animacje: IntersectionObserver fade-in, hover transitions, count-up, FAQ akordeon
  — wszystko przez Tailwind classes + custom hooks
- Fonty Google: Playfair Display (700), Cormorant Garamond (600), Inter (400, 600, 700)
- Deployment: statyczny build → eksport ZIP

---

# SEO — META TAGI (react-helmet-async)

Umieść w <Helmet> w głównym komponencie App:

<title>GRANBET Zakład Kamieniarski | Nagrobki Hrubieszów, Kryłów, Dołhobyczów</title>

<meta name="description"
  content="Zakład Kamieniarski GRANBET — nagrobki granitowe, schody, parapety,
  grobowce i fotoceramika. Własna produkcja od 1988 roku.
  Kryłów ☎ 502 480 543 | Hrubieszów ☎ 697 994 924" />

<meta property="og:title"
  content="GRANBET Zakład Kamieniarski | Nagrobki i Kamieniarstwo" />
<meta property="og:description"
  content="Nagrobki, grobowce, fotoceramika, schody granitowe.
  Tradycja od 1988 roku. Hrubieszów, Kryłów, Dołhobyczów." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://granbet.pl" />
<meta property="og:locale" content="pl_PL" />
<meta property="og:image" content="https://granbet.pl/og-image.jpg" />

<link rel="canonical" href="https://granbet.pl" />

NIE dodawaj meta keywords.

---

# SEO — JSON-LD #1 (LocalBusiness)

Umieść jako <script type="application/ld+json"> w <Helmet>:

{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GRANBET Zakład Kamieniarski",
  "description": "Zakład kamieniarski — nagrobki granitowe, grobowce, fotoceramika, schody. Tradycja od 1988 roku. Kryłów, Hrubieszów, Dołhobyczów.",
  "telephone": "+48502480543",
  "email": "granbet@vp.pl",
  "url": "https://granbet.pl",
  "image": "https://granbet.pl/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ul. Hrubieszowska 33",
    "addressLocality": "Kryłów",
    "addressRegion": "lubelskie",
    "postalCode": "22-540",
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.6825,
    "longitude": 24.0083
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "07:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "07:00",
      "closes": "15:00"
    }
  ],
  "foundingDate": "1988-01-01",
  "priceRange": "$$",
  "hasMap": "https://maps.google.com/?q=Krylow+ul.+Hrubieszowska+33+gmina+Mircze",
  "review": [
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Rodzina K."},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "Jesteśmy bardzo wdzięczni za pomoc i profesjonalne podejście. Nagrobek wykonany dokładnie według naszych życzeń."
    },
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Rodzina W."},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "Obsługa z sercem — czuliśmy się zaopiekowani na każdym etapie. Nagrobek jest piękny i trwały."
    },
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Rodzina N."},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "Terminowość, jakość i ludzkie podejście na najwyższym poziomie."
    }
  ]
}

# SEO — JSON-LD #2 (FAQPage)

Drugi OSOBNY <script type="application/ld+json"> w <Helmet>:

{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Jak zamówić nagrobek w GRANBET?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wystarczy zadzwonić pod numer 502 480 543 lub odwiedzić nas w Kryłowie albo Hrubieszowie. Razem omówimy projekt, materiał i termin realizacji."
      }
    },
    {
      "@type": "Question",
      "name": "Ile kosztuje nagrobek granitowy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cena zależy od wybranego granitu, rozmiaru i zdobień. Zapraszamy na bezpłatną konsultację — dopasujemy projekt do budżetu."
      }
    },
    {
      "@type": "Question",
      "name": "Jak długo czeka się na wykonanie nagrobka?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standardowy czas realizacji wynosi 4–8 tygodni od zatwierdzenia projektu. Prostsze modele mogą być gotowe szybciej."
      }
    },
    {
      "@type": "Question",
      "name": "Czy GRANBET wykonuje renowacje starych nagrobków?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak — oferujemy czyszczenie, odświeżenie napisów, wymianę elementów i konserwację kamienia."
      }
    },
    {
      "@type": "Question",
      "name": "Gdzie znajdę zakład kamieniarski w Hrubieszowie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biuro handlowe GRANBET przy ul. Nowej 10 w Hrubieszowie. Zakład produkcyjny w Kryłowie przy trasie Hrubieszów–Dołhobyczów."
      }
    },
    {
      "@type": "Question",
      "name": "Czy GRANBET obsługuje klientów z całego powiatu hrubieszowskiego?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak — obsługujemy Hrubieszów, Kryłów, Dołhobyczów i cały powiat hrubieszowski. Dowozimy i montujemy nagrobki na miejscu."
      }
    }
  ]
}

---

# PALETA KOLORÓW (tailwind.config.ts)

Rozszerz Tailwind w tailwind.config.ts → theme.extend.colors:

colors: {
  g: {
    bg:         '#1F1F1F',
    bgAlt:      '#2A2A2A',
    card:       '#333333',
    cardHover:  '#3A3A3A',
    deep:       '#141414',
    footer:     '#0D0D0D',
    faq:        '#252525',

    gold:       '#C6A85A',
    goldHover:  '#B8963E',

    navy:       '#2E3A46',

    textLight:  '#E5E5E5',
    textMuted:  '#9A9A9A',
    textWarm:   '#D0C8BC',
    textDim:    '#A0A0A0',
  }
}

Wszystkie kolory przez g-* (np. bg-g-bg, text-g-gold).
Cała strona jest ciemna — NIGDY nie używaj białego ani jasnego tła sekcji.

---

# TYPOGRAFIA

- H1–H2: 'Playfair Display', serif — 700
- H3–H4, etykiety: 'Cormorant Garamond', serif — 600
- Body, przyciski, formularze: 'Inter', sans-serif
- Rozmiar bazowy body: 18px (1.125rem)
- Line-height body: 1.75
- Letter-spacing nagłówków: tracking-wide
- Kontrast WCAG AA:
  #E5E5E5 na #1F1F1F = 12.1:1 ✅
  #9A9A9A na #1F1F1F = 4.6:1 ✅
  #A0A0A0 na #2A2A2A = 4.6:1 ✅
  #C6A85A na #1F1F1F = 5.3:1 ✅

Załaduj fonty przez Google Fonts  w index.html .

---

# ZASADY DESIGNU

1. CAŁA strona ciemna — nigdy biały/jasny kolor tła
2. Złoto g-gold jako jedyny akcent łączący wszystkie sekcje
3. Tła sekcji naprzemienne: g-bg ↔ g-bgAlt ↔ g-deep — subtelny rytm w ciemności
4. Hover karty: translateY(-5px) + shadow ze złotym odcieniem
5. Hover przyciski: translateY(-2px) + złoty shadow
6. Fade-in: IntersectionObserver, translateY(24px)→0, opacity 0→1, stagger 100ms
7. BEZ auto-sliderów, BEZ migających efektów, BEZ parallax
8. Przyciski CTA: min-h-[52px]
9. Padding sekcji: py-24
10. prefers-reduced-motion: wyłącz translate, count-up, akordeon animację
11. ARIA: labels na przyciskach bez tekstu, aria-expanded na FAQ, role na nav/footer

---

# RYTM SEKCJI (wszystkie ciemne)

Header         → bg-transparent → bg-g-bg po scrollu
Hero           → bg-g-bg + gradient overlay
O nas          → bg-g-bgAlt
Oferta         → bg-g-bg
Dlaczego my    → bg-g-bgAlt
Opinie         → bg-g-bg
Proces         → bg-g-bgAlt
Galeria        → bg-g-deep
FAQ            → bg-g-bg
CTA            → bg-g-navy + złota linia górna
Kontakt        → bg-g-bgAlt
Footer         → bg-g-footer + złota linia górna

---

# ALT-TEXT I WYDAJNOŚĆ

Każdy  i placeholder:
- Opisowy alt="" — „[Typ] – realizacja GRANBET"
- loading="lazy"
- decoding="async"
Placeholdery: div z role="img" i aria-label.

---

# SEKCJE STRONY — 14 SEKCJI

## 1. HEADER (sticky top-0 z-50)

STAN POCZĄTKOWY (przed scrollem):
Tło: transparent (hero prześwituje). Brak cienia.
Logo „GRANBET": Playfair bold text-2xl text-white.
Podtytuł „Zakład Kamieniarski od 1988 r.": Cormorant 13px text-g-gold.
Menu: Inter 16px text-g-textLight hover:text-g-gold transition-colors.

STAN PO SCROLLU (>50px) — transition-all duration-300:
Tło: bg-g-bg. Shadow: shadow-[0_2px_16px_rgba(0,0,0,0.5)].
Reszta bez zmian.

Telefon (prawy róg, obie stany):

„☎ 502 480 543"
bg-g-gold text-g-bg font-bold text-[17px] px-5 py-2.5 rounded-lg
hover:bg-g-goldHover transition-colors.

MOBILE:
- Górny pasek (ZAWSZE WIDOCZNY):
  - Lewo: „GRANBET" Playfair bold text-xl text-white
  - Środek/prawo:  „☎ 502 480 543"
    font-bold text-base text-g-gold — KLIKALNY, WIDOCZNY ZAWSZE
  - Prawo: hamburger Menu z lucide-react text-g-gold
    aria-label="Otwórz menu nawigacji"
- Menu mobile po otwarciu:
  Pełnoekranowe bg-g-bg, linki text-xl text-g-textLight py-4,
  hover:text-g-gold. Zamknięcie: X z lucide-react
  aria-label="Zamknij menu".

WAŻNE: Numer telefonu na mobile MUSI być widoczny w headerze BEZ otwierania menu.

---

## 2. HERO

Wysokość: min-h-[90dvh].
Tło: bg-g-bg. Gradient overlay: rgba(0,0,0,0.6) na przyszłe zdjęcie.
Placeholder: bg-gradient-to-b from-g-bg to-stone-800.

Treść wyśrodkowana:

- Nad H1: „EST. 1988"
  — Cormorant 14px text-g-gold uppercase tracking-[5px]
- H1: „GRANBET"
  — Playfair text-7xl md:text-8xl text-white
- H2: „Zakład Kamieniarski"
  — Playfair text-2xl md:text-4xl text-g-gold
- Separator: div w-24 h-0.5 bg-g-gold mx-auto my-6
- Tagline: „Hrubieszów · Kryłów · Dołhobyczów — od 1988 roku"
  — Inter text-lg text-g-textWarm
- Dwa przyciski (flex gap-4, stagger fade-in 300ms):
  1. „Nasze realizacje" → #galeria
     bg-g-gold text-g-bg font-bold px-8 min-h-[52px] rounded-lg
     hover:bg-g-goldHover hover:-translate-y-0.5
     hover:shadow-[0_6px_20px_rgba(198,168,90,0.35)]
     transition-all duration-200
  2. „Porozmawiajmy" → #kontakt
     bg-transparent text-g-gold border-2 border-g-gold px-8 min-h-[52px] rounded-lg
     hover:bg-g-gold hover:text-g-bg transition-all duration-200

- Scroll: ChevronDown lucide-react text-g-gold animate-bounce absolute bottom-8
  aria-hidden="true"

---

## 3. O NAS (id="o-nas")

Tło: bg-g-bgAlt. scroll-mt-20. Aria-label="O firmie GRANBET".

H2: „O firmie GRANBET" — Playfair text-white text-center.
Linia pod H2: div w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12.

Układ: lg:grid-cols-2 gap-12 items-center. 1 kolumna mobile.

Lewa — tekst:
Akapit 1: „Rozumiemy, że wybór nagrobka to jedna z najtrudniejszych decyzji
w życiu. Dlatego od ponad 35 lat towarzyszymy rodzinom z Hrubieszowa i okolic
— bez pośpiechu, z szacunkiem i pełnym zaangażowaniem."

Akapit 2: „Zakład produkcyjny GRANBET mieści się w Kryłowie przy trasie
Hrubieszów–Dołhobyczów. Każdy nagrobek wykonujemy własnoręcznie — od projektu
przez produkcję po montaż na cmentarzu."

Inter text-lg text-g-textLight leading-relaxed. Akapity mb-4.

Prawa — placeholder:
div aspect-[4/3] bg-stone-600 rounded-xl overflow-hidden
role="img" aria-label="Zakład kamieniarski GRANBET w Kryłowie – widok warsztatu".
Tekst „Zdjęcie zakładu" (text-sm text-stone-400).
Animacja: fade-in translate-x-8.

---

## 4. OFERTA (id="oferta")

Tło: bg-g-bg. scroll-mt-20. Aria-label="Oferta usług".

H2: „Jak możemy pomóc?" — Playfair text-white.
Podtytuł: „Wykonujemy z kamienia wszystko, czego potrzebujesz"
— Inter text-lg text-g-textMuted.
Linia pod H2: div w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12.

Grid: lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6.

6 kart — każda:
bg-g-card border-t-4 border-g-gold p-6 rounded-lg
hover:-translate-y-[5px] hover:shadow-[0_14px_36px_rgba(198,168,90,0.22)]
hover:border-t-g-goldHover transition-all duration-250.

Karty (ikona lucide-react w-8 h-8 text-g-gold mb-3):

1. Gem | „Nagrobki granitowe"
   „Pomagamy godnie upamiętniać bliskich — tradycyjne i nowoczesne,
   z naturalnego granitu."

2. Landmark | „Grobowce rodzinne"
   „Trwałe grobowce dla rodzin — służące kolejnym pokoleniom."

3. Camera | „Fotoceramika"
   „Zdjęcia w krysztale i porcelanie — wizerunek zachowany na wieki."

4. ArrowUpFromLine | „Schody, parapety, blaty"
   „Elementy granitowe do wnętrz i ogrodów — estetyczne i trwałe."

5. Flame | „Kominki i tarasy"
   „Granitowe obudowy kominków, tarasy, chodniki z kostki."

6. Wrench | „Renowacje"
   „Przywracamy nagrobkom dawny blask — czyszczenie i konserwacja kamienia."

Tytuł: Playfair text-lg text-white font-bold.
Opis: Inter text-base text-g-textDim leading-relaxed.

---

## 5. DLACZEGO MY

Tło: bg-g-bgAlt.

H2: „Dlaczego rodziny nam ufają?" — Playfair text-white.
Podtytuł: „Ponad 35 lat budujemy zaufanie jedną realizacją na raz"
— Inter text-lg text-g-textMuted.
Linia pod H2: div w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12.

Grid: lg:grid-cols-4 grid-cols-2 gap-8 text-center.

4 statystyki (count-up):
- „35+" → „Lat nieprzerwanej działalności"
- „500+" → „Rodzin, którym pomogliśmy"
- „3" → „Lokalizacje obsługi klientów"
- „100%" → „Własna produkcja w Kryłowie"

Liczba: Playfair text-6xl md:text-7xl text-g-gold font-bold.
Opis: Inter text-base text-g-textLight mt-2.

Count-up: 0→wartość ~2s, easeOutCubic. prefers-reduced-motion: statycznie.
Każda statystyka: aria-label np. „35 plus lat doświadczenia".

Pod statystykami (mt-12): grid lg:grid-cols-2 gap-x-12 gap-y-3.
Check lucide-react w-5 h-5 text-g-gold.
Inter text-[17px] text-g-textLight.

- „35 lat doświadczenia"
- „Setki zrealizowanych nagrobków i pomników"
- „Indywidualne podejście do każdego zlecenia"
- „Terminowość i rzetelność"
- „Obsługa Hrubieszów, Kryłów i Dołhobyczów"

---

## 6. OPINIE KLIENTÓW (id="opinie")

Tło: bg-g-bg. scroll-mt-20.

H2: „Co mówią nasi klienci" — Playfair text-white text-center.
Linia pod H2: div w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12.
Podtytuł: „Opinie rodzin, którym towarzyszyliśmy"
— Inter text-lg text-g-textMuted.

Grid: lg:grid-cols-3 grid-cols-1 gap-6. Stagger fade-in (+100ms).

3 karty — każda:



bg-g-card border-l-4 border-g-gold rounded-xl p-7
hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(198,168,90,0.22)]
transition-all duration-250.

Gwiazdki: 5× Star lucide-react w-5 h-5 text-g-gold fill-g-gold.
Wrapper: flex gap-1 mb-3, aria-label="Ocena 5 na 5 gwiazdek".
Każda Star: aria-hidden="true".

Cytat: 

 Inter text-[17px] text-g-textLight italic leading-relaxed mb-4.
Autor: 

 Cormorant 16px text-g-gold font-semibold. Prefix „— ".

Opinia 1:
„Jesteśmy bardzo wdzięczni za pomoc i profesjonalne podejście. Nagrobek wykonany
dokładnie według naszych życzeń — na czas i w dobrej cenie."
— Rodzina K., Hrubieszów

Opinia 2:
„Obsługa z sercem — czuliśmy się zaopiekowani na każdym etapie. Cierpliwie
doradzono nam wybór granitu i napisu. Nagrobek jest piękny i trwały."
— Rodzina W., Kryłów

Opinia 3:
„Solidny zakład kamieniarski. Terminowość, jakość i ludzkie podejście
— wszystko na najwyższym poziomie. Polecamy."
— Rodzina N., Dołhobyczów

Przycisk pod kartami (mt-10 text-center):

„Wystaw opinię w Google →"
bg-transparent border-2 border-g-gold text-g-gold
px-8 min-h-[48px] rounded-lg inline-flex items-center justify-center
hover:bg-g-gold hover:text-g-bg transition-all duration-200.

---

## 7. PROCES (id="proces")

Tło: bg-g-bgAlt. scroll-mt-20.

H2: „Jak wygląda nasza współpraca?" — Playfair text-white.
Podtytuł: „Krok po kroku — od pierwszego kontaktu do gotowego nagrobka"
— Inter text-lg text-g-textMuted.
Linia pod H2: div w-10 h-0.5 bg-g-gold mx-auto mt-4 mb-12.

Desktop: flex flex-row items-stretch gap-4 ze strzałkami.
Mobile: flex flex-col gap-6, bez strzałek.

4 karty:

01 — MessageCircle | „Konsultacja"
„Zadzwoń, napisz lub odwiedź nas osobiście. Wysłuchamy i doradzimy
bez żadnej presji."

02 — PenTool | „Projekt"
„Wspólnie zaprojektujemy nagrobek dopasowany do Twoich potrzeb i budżetu."

03 — Hammer | „Realizacja"
„Wykonujemy nagrobek we własnym zakładzie w Kryłowie — pełna kontrola
jakości."

04 — CheckCircle | „Montaż"
„Dowozimy i montujemy nagrobek na cmentarzu. Pełna obsługa w cenie."

Styl karty: bg-g-card border-2 border-g-cardHover rounded-xl p-7 flex-1
hover:border-g-gold hover:bg-g-cardHover transition-all duration-200.

Numer: Playfair text-5xl text-g-gold/15 absolute top-2 right-4.
Ikona: lucide-react w-8 h-8 text-g-gold mb-3.
Tytuł: Playfair text-xl text-white font-bold.
Opis: Inter text-base text-g-textDim leading-relaxed.

Strzałki (desktop only):
ArrowRight lucide-react w-6 h-6 text-g-gold flex-shrink-0 self-center mx-2.

Przycisk (mt-10 text-center):
 „Zadzwoń i umów konsultację"
bg-g-gold text-g-bg px-10 min-h-[52px] rounded-lg inline-flex items-center
justify-center font-bold text-lg
hover

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://wariant1.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5cb2b1c2-b51c-4f23-aea4-69b282d2519d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
