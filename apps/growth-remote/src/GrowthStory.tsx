import { ArrowRight, BadgeCheck, Building2, MapPinned } from "lucide-react";
import globalGrowth from "./assets/global-growth.png";
import halal from "./assets/halal.jpeg";
import "./styles.css";

const stats = [
  { value: "6,000+", label: "stores worldwide" },
  { value: "130+", label: "Malaysia outlets" },
  { value: "JAKIM", label: "Halal certification focus" },
];

export default function GrowthStory() {
  return (
    <>
      <section className="growth-section" id="stores">
        <div className="growth-copy">
          <p className="growth-kicker">GLOBAL STORES</p>
          <h2>From Yunnan tea roots to international city corners.</h2>
          <p>
            CHAGEE Malaysia mirrors the global store story with a polished local
            presence: high-traffic malls, warm service counters, and a menu that
            keeps oriental tea recognizable across markets.
          </p>
          <div className="growth-stats" aria-label="Store growth highlights">
            {stats.map((stat) => (
              <span key={stat.value}>
                <strong>{stat.value}</strong>
                {stat.label}
              </span>
            ))}
          </div>
          <a className="growth-link" href="#contact">
            Find a store
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>
        <div className="growth-media">
          <img src={globalGrowth} alt="Blue global map visual for CHAGEE store growth" />
          <div className="growth-pins" aria-label="Regional store signals">
            <span>
              <MapPinned size={18} aria-hidden="true" />
              Malaysia
            </span>
            <span>
              <Building2 size={18} aria-hidden="true" />
              Urban outlets
            </span>
          </div>
        </div>
      </section>

      <section className="halal-section" id="halal">
        <div className="halal-media">
          <img src={halal} alt="CHAGEE Malaysia Halal certified outlets campaign visual" />
        </div>
        <div className="halal-copy">
          <p className="growth-kicker">HALAL</p>
          <h2>Halal assurance remains central to the Malaysia experience.</h2>
          <p>
            The Malaysia operation presents Halal status as a primary trust signal,
            aligning outlet preparation and ingredient standards with local
            expectations for certified food and beverage retail.
          </p>
          <div className="halal-badge">
            <BadgeCheck size={22} aria-hidden="true" />
            Halal-certified outlet positioning
          </div>
        </div>
      </section>

      <section className="media-strip" id="media" aria-label="Media centre">
        <span>MEDIA CENTRE</span>
        <p>Campaign drops, brand news, and store updates continue the CHAGEE Malaysia story.</p>
      </section>
    </>
  );
}
