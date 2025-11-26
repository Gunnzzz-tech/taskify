import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./website1-index.css"; // The one with custom colors
import "./website2-index.css"; // Your current one
  createRoot(document.getElementById("root")!).render(<App />);
  