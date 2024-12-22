import React, { useEffect } from "react";
import "./MainFrame.css";
import HomePage from "../../pages/HomePage";
import RulesPage from "../../pages/Rules/RulesMainPage";
import SpellPage from "../../pages/Profile/ProfileSpellPage";
import ChSheetPage from "../../pages/Profile/ProfileSheetPage";
import NotFoundPage from "../../pages/NotFoundPage";
import ProtectedRoute from "../ProtectedRoute";
import HistoryPage from "../../pages/Lore/LoreHistoryPage";
import LoreMagicPage from "../../pages/Lore/LoreMagicPage";
import ProfileStoryPage from "../../pages/Profile/ProfileStoryPage";
import LoreReligionPage from "../../pages/Lore/LoreReligionPage";
import { Route, Routes } from "react-router-dom";

const MainFrame = () => {
   useEffect(() => {
      const bg = document.querySelector(".mainframe__bg");
      const numRhombuses = Math.floor(
         (bg.offsetWidth * bg.offsetHeight) / (80 * 138)
      );
      const numDarkRhombuses = Math.floor(numRhombuses * 0.05); // 5% от общего числа ромбов

      // Функция для создания ромбов
      const createRhombuses = (className) => {
         for (let i = 0; i < numDarkRhombuses; i++) {
            const top =
               Math.floor(Math.random() * (bg.offsetHeight / 138)) * 138;
            const left = Math.floor(Math.random() * (bg.offsetWidth / 80)) * 80;
            const rhombus = document.createElement("div");
            rhombus.className = className;
            rhombus.style.top = `${top}px`;
            rhombus.style.left = `${left}px`;
            bg.appendChild(rhombus);
         }
      };

      // Создание темных ромбов
      createRhombuses("mainframe__rhombus mainframe__rhombus--dark");

      // Создание более темных ромбов
      createRhombuses("mainframe__rhombus mainframe__rhombus--darker");

      // Создание белых ромбов на темных участках
      createRhombuses("mainframe__rhombus mainframe__rhombus--white");

      // С вероятностью 1% добавить один красный ромб в случайное место
      if (Math.random() < 0.01) {
         const top = Math.floor(Math.random() * (bg.offsetHeight / 138)) * 138;
         const left = Math.floor(Math.random() * (bg.offsetWidth / 80)) * 80;
         const redRhombus = document.createElement("div");
         redRhombus.className = "mainframe__rhombus mainframe__rhombus--red";
         redRhombus.style.top = `${top}px`;
         redRhombus.style.left = `${left}px`;
         bg.appendChild(redRhombus);
      }
   }, []);

   return (
      <div className="flex">
         <div className="mainframe__bg-container">
            <div className="mainframe__bg"></div>
         </div>
         <div className="content-wrapper">
            {
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/rules" element={<RulesPage />} />
                  <Route path="/spell" element={<SpellPage />} />
                  <Route path="/lore/history" element={<HistoryPage />} />
                  <Route path="/lore/magic" element={<LoreMagicPage />} />
                  <Route path="/lore/religion" element={<LoreReligionPage />} />
                  <Route
                     path="/sheet"
                     element={<ProtectedRoute component={ChSheetPage} />}
                  />
                  <Route
                     path="/character"
                     element={<ProtectedRoute component={ProfileStoryPage} />}
                  />
                  <Route path="*" element={<NotFoundPage />} />
               </Routes>
            }
         </div>
      </div>
   );
};

export default MainFrame;
