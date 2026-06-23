import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GrowthStory from "./GrowthStory";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GrowthStory />
  </StrictMode>,
);
