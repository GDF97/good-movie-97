import React from "react";
import ReactDOM from "react-dom/client";

import "./scss/main.scss";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);
