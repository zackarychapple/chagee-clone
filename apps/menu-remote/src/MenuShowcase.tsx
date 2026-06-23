import { ArrowRight, Leaf, Milk, Sparkles } from "lucide-react";
import milkTea from "./assets/milk-tea.jpeg";
import brewTea from "./assets/brew-tea.jpeg";
import fruitTea from "./assets/fruit-tea.jpeg";
import icedOriental from "./assets/iced-oriental.jpeg";
import teaspressoLatte from "./assets/teaspresso-latte.jpeg";
import frappe from "./assets/frappe.jpeg";
import "./styles.css";

const categories = [
  {
    title: "Milk Tea Series",
    image: milkTea,
    note: "Signature milk tea with bold tea aroma.",
  },
  {
    title: "Brew Tea Series",
    image: brewTea,
    note: "Pure tea profiles served clear and focused.",
  },
  {
    title: "Fruit Tea Series",
    image: fruitTea,
    note: "Tea brightness layered with fruit freshness.",
  },
  {
    title: "Iced Oriental Tea",
    image: icedOriental,
    note: "Crisp cold tea made for warm afternoons.",
  },
  {
    title: "Teaspresso Tea Latte",
    image: teaspressoLatte,
    note: "Tea extracted with espresso-like intensity.",
  },
  {
    title: "Teaspresso Tea Frappe",
    image: frappe,
    note: "Blended tea drinks with a dessert finish.",
  },
];

export default function MenuShowcase() {
  return (
    <section className="menu-remote" id="menu">
      <div className="menu-intro">
        <div>
          <p className="menu-kicker">ABOUT OUR TEA</p>
          <h2>Original leaves, fresh milk, and a menu built around tea aroma.</h2>
        </div>
        <p>
          The CHAGEE-style menu moves from pure tea to milk tea, fruit tea, and
          teaspresso drinks. Each category keeps the leaf at the center, then
          changes texture, temperature, and sweetness around it.
        </p>
      </div>

      <div className="tea-principles" aria-label="Tea principles">
        <span>
          <Leaf size={22} aria-hidden="true" />
          Fresh leaf extraction
        </span>
        <span>
          <Milk size={22} aria-hidden="true" />
          Milk tea signatures
        </span>
        <span>
          <Sparkles size={22} aria-hidden="true" />
          Seasonal flavor edits
        </span>
      </div>

      <div className="menu-grid">
        {categories.map((category) => (
          <article className="menu-tile" key={category.title}>
            <img src={category.image} alt="" />
            <div className="menu-tile__shade" />
            <div className="menu-tile__content">
              <h3>{category.title}</h3>
              <p>{category.note}</p>
              <a href="#menu" aria-label={`View ${category.title}`}>
                <ArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
