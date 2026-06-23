import { lazy, Suspense, useEffect, useState } from "react";
import { ChevronUp, Globe2, MapPin, Menu, Search, X } from "lucide-react";

const BrandExperience = lazy(() => import("brandRemote/BrandExperience"));
const MenuShowcase = lazy(() => import("menuRemote/MenuShowcase"));
const GrowthStory = lazy(() => import("growthRemote/GrowthStory"));

const navItems = [
  { label: "ABOUT US", href: "#about" },
  { label: "MENU", href: "#menu" },
  { label: "GLOBAL STORES", href: "#stores" },
  { label: "HALAL", href: "#halal" },
  { label: "MEDIA CENTRE", href: "#media" },
  { label: "GET IN TOUCH", href: "#contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled || isOpen ? "site-header--solid" : ""}`}>
      <a className="brand-mark" href="#top" aria-label="CHAGEE Malaysia home">
        <span className="brand-emblem" aria-hidden="true">
          茶
        </span>
        <span>
          <strong>CHAGEE</strong>
          <small>霸王茶姬</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="icon-button" type="button" aria-label="Search">
          <Search size={18} aria-hidden="true" />
        </button>
        <button className="icon-button" type="button" aria-label="Choose region">
          <Globe2 size={18} aria-hidden="true" />
        </button>
        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>

      <nav className={`mobile-nav ${isOpen ? "mobile-nav--open" : ""}`} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionFallback({ label }: { label: string }) {
  return (
    <section className="section-fallback" aria-label={`${label} loading`}>
      <div className="fallback-line" />
      <div className="fallback-panel" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-columns">
        <div>
          <a className="footer-title" href="#about">
            ABOUT US
          </a>
          <a href="#about">Introduction</a>
          <a href="#about">History</a>
          <a href="https://investor.chagee.com" target="_blank" rel="noreferrer">
            Investor Relations
          </a>
        </div>
        <div>
          <a className="footer-title" href="#menu">
            MENU
          </a>
          <a href="#menu">Milk Tea Series</a>
          <a href="#menu">Brew Tea Series</a>
          <a href="#menu">Fruit Tea Series</a>
        </div>
        <div>
          <a className="footer-title" href="#stores">
            GLOBAL STORES
          </a>
          <a href="#halal">Halal</a>
          <a href="#media">Media Centre</a>
          <a href="#contact">Get In Touch</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>CHAGEE Malaysia 2026</span>
        <span className="footer-location">
          <MapPin size={16} aria-hidden="true" />
          Kuala Lumpur, Malaysia
        </span>
      </div>
    </footer>
  );
}

function BackToTop() {
  return (
    <a className="back-to-top" href="#top" aria-label="Back to top">
      <ChevronUp size={22} aria-hidden="true" />
    </a>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Suspense fallback={<SectionFallback label="Brand" />}>
          <BrandExperience />
        </Suspense>
        <Suspense fallback={<SectionFallback label="Menu" />}>
          <MenuShowcase />
        </Suspense>
        <Suspense fallback={<SectionFallback label="Growth" />}>
          <GrowthStory />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
