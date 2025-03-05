/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Host from "./host.tsx";

import { BrowserRouter } from "react-router-dom";

import "./index.css";

// @ts-ignore
import("ui/tailwindcss");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Host />
    </BrowserRouter>
  </StrictMode>
);
