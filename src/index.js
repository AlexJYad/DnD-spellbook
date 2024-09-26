import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <React.StrictMode>
      <Helmet>
         <meta property="og:title" content="D&D: Black And White" />
         <meta
            property="og:description"
            content="Хранилище для игры в D&D: Black And White"
         />
         <meta
            property="og:image"
            content="https://raw.githubusercontent.com/AlexJYad/DnD-spellbook/refs/heads/main/src/img/background/HP.png"
         />
         <meta property="og:url" content="https://yad-spellbook.netlify.app/" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content="D&D: Black And White" />
         <meta
            name="twitter:description"
            content="Хранилище для игры в D&D: Black And White"
         />
         <meta
            name="twitter:image"
            content="https://raw.githubusercontent.com/AlexJYad/DnD-spellbook/refs/heads/main/src/img/background/HP.png"
         />
         <meta
            name="description"
            content="Хранилище для игры в D&D: Black And White"
         />
      </Helmet>
      <App />
   </React.StrictMode>
);

// Для измерения производительности приложения
reportWebVitals();
