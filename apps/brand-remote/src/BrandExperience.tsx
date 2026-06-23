import { useEffect, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import kampungHero from "./assets/kampung-hero.jpeg";
import burdenFreeHero from "./assets/burden-free-hero.jpeg";
import teaHero from "./assets/tea-hero.jpeg";
import aboutTea from "./assets/about-tea.png";
import "./styles.css";

const heroSlides = [
  {
    image: kampungHero,
    eyebrow: "CHAGEE TOGETHER",
    title: "CHAGEE Malaysia",
    description: "Oriental tea craft, Malaysian gatherings, and a brighter everyday ritual.",
  },
  {
    image: burdenFreeHero,
    eyebrow: "EVERYDAY CHAGEE",
    title: "Tea for Lightness",
    description: "Fresh-brewed tea drinks made for movement, easy routines, and shared breaks.",
  },
  {
    image: teaHero,
    eyebrow: "MODERN ORIENTAL TEA",
    title: "Fresh Leaves First",
    description: "A contemporary tea house language built from original leaves and fresh milk.",
  },
];

export default function BrandExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroSlides.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const activeSlide = heroSlides[activeIndex];

  return (
    <>
      <section className="brand-hero" aria-label="CHAGEE Malaysia campaign">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.title}
            className={`brand-hero__image ${index === activeIndex ? "brand-hero__image--active" : ""}`}
            src={slide.image}
            alt=""
            aria-hidden={index !== activeIndex}
          />
        ))}

        <div className="brand-hero__overlay" />

        <div className="brand-hero__content">
          <p>{activeSlide.eyebrow}</p>
          <h1>
            <span>CHAGEE</span>
            {" "}
            <span>Malaysia</span>
          </h1>
          <strong>{activeSlide.title}</strong>
          <span>{activeSlide.description}</span>
          <a className="brand-hero__link" href="#about">
            Explore the brand
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>

        <div className="brand-hero__controls" aria-label="Hero carousel controls">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.eyebrow}
              className={index === activeIndex ? "is-active" : ""}
              type="button"
              aria-label={`Show ${slide.title}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
          <button
            className="brand-hero__pause"
            type="button"
            aria-label={isPaused ? "Play hero carousel" : "Pause hero carousel"}
            onClick={() => setIsPaused((value) => !value)}
          >
            {isPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          </button>
        </div>
      </section>

      <section className="brand-about" id="about">
        <div className="brand-about__media">
          <img src={aboutTea} alt="CHAGEE fashion campaign inspired by eastern tea culture" />
        </div>
        <div className="brand-about__copy">
          <p className="section-kicker">ABOUT US</p>
          <h2>CHAGEE brings original-leaf tea into a modern ritual.</h2>
          <p>
            The Malaysia experience balances theatrical brand imagery with fresh milk tea,
            brewed tea, and fruit-led drinks. The result feels ceremonial, but stays built
            for everyday stops with friends, colleagues, and family.
          </p>
          <div className="brand-about__metrics" aria-label="Brand highlights">
            <span>
              <strong>6,000+</strong>
              global stores
            </span>
            <span>
              <strong>2017</strong>
              founded in Yunnan
            </span>
            <span>
              <strong>MY</strong>
              local Halal focus
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
