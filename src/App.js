import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RulesPage from "./pages/RulesPage";
import SpellPage from "./pages/SpellPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
   useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
      }
   }, []);

   return (
      <Router>
         <div className="App">
            <a href={"/"}>
               <img
                  src={`${process.env.PUBLIC_URL}/favicon.ico`}
                  alt="Favicon"
                  height={36}
               />
            </a>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/rules" element={<RulesPage />} />
               <Route path="*" element={<NotFoundPage />} />
               <Route path="spell" element={<SpellPage />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
