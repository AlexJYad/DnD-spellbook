import React, { useEffect } from "react";
import "../CSS/Main.css";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import RulesPage from "../pages/RulesPage";
import SpellPage from "../pages/SpellPage";
import ChSheetPage from "../pages/ChSheetPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";
import Info from "../pages/Info";
import HistoryPage from "../pages/HistoryPage";
import LoreMagicPage from "../pages/LoreMagicPage";
import { Route, Routes } from "react-router-dom";

const Main = () => {
   useEffect(() => {
      const background = document.querySelector(".background");
      const numRhombuses = Math.floor(
         (background.offsetWidth * background.offsetHeight) / (80 * 138)
      );
      const numDarkRhombuses = Math.floor(numRhombuses * 0.05); // 5% от общего числа ромбов

      // Функция для создания ромбов
      const createRhombuses = (className) => {
         for (let i = 0; i < numDarkRhombuses; i++) {
            const top =
               Math.floor(Math.random() * (background.offsetHeight / 138)) *
               138;
            const left =
               Math.floor(Math.random() * (background.offsetWidth / 80)) * 80;
            const rhombus = document.createElement("div");
            rhombus.className = className;
            rhombus.style.top = `${top}px`;
            rhombus.style.left = `${left}px`;
            background.appendChild(rhombus);
         }
      };

      // Создание темных ромбов
      createRhombuses("dark-rhombus");

      // Создание более темных ромбов
      createRhombuses("darker-rhombus");

      // Создание белых ромбов на темных участках
      createRhombuses("white-rhombus");

      // С вероятностью 1% добавить один красный ромб в случайное место
      if (Math.random() < 0.01) {
         const top =
            Math.floor(Math.random() * (background.offsetHeight / 138)) * 138;
         const left =
            Math.floor(Math.random() * (background.offsetWidth / 80)) * 80;
         const redRhombus = document.createElement("div");
         redRhombus.className = "red-rhombus";
         redRhombus.style.top = `${top}px`;
         redRhombus.style.left = `${left}px`;
         background.appendChild(redRhombus);
      }
   }, []);

   return (
      <>
         <div className="flex">
            <div className="background-container">
               <div className="background"></div>
            </div>
            <div className="content-wrapper">
               {
                  <Routes>
                     <Route path="/" element={<HomePage />} />
                     <Route path="/about" element={<AboutPage />} />
                     <Route path="/rules" element={<RulesPage />} />
                     <Route path="/spell" element={<SpellPage />} />
                     <Route path="/lore/history" element={<HistoryPage />} />
                     <Route path="/lore/magic" element={<LoreMagicPage />} />
                     <Route
                        path="/sheet"
                        element={<ProtectedRoute component={ChSheetPage} />}
                     />
                     <Route
                        path="/info"
                        element={<ProtectedRoute component={Info} />}
                     />
                     <Route path="*" element={<NotFoundPage />} />
                  </Routes>
               }
            </div>
         </div>
      </>
   );
};

export default Main;
