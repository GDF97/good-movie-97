import React from "react";
import ReactDOM from "react-dom/client";

import "./scss/main.scss";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./contexts/Language/LanguageProvider.tsx";
import { PageProvider } from "./contexts/Page/PageProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <PageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PageProvider>
    </LanguageProvider>
  </React.StrictMode>
);
