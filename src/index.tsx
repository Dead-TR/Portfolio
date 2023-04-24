import { createRoot } from "react-dom/client";

import App from "containers/App";
import "./index.css";

const rootEl: HTMLDivElement | null = document.querySelector("#root");

const createReactApp = () => {
  const root = createRoot(rootEl as HTMLDivElement);
  root.render(<App />);
};

createReactApp();
