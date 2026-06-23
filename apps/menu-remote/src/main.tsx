import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MenuShowcase from "./MenuShowcase";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuShowcase />
  </StrictMode>,
);
