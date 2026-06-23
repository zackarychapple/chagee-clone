import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BrandExperience from "./BrandExperience";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrandExperience />
  </StrictMode>,
);
