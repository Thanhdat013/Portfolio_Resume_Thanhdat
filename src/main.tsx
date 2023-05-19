import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import Preloader from "./components/content/preLoader/Preloader.tsx"
import "./i18n"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
  </React.StrictMode>
)
