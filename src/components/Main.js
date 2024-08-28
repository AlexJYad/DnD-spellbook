import React, { useState, useEffect, useCallback } from "react";
import "../CSS/Main.css";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import RulesPage from "../pages/RulesPage";
import SpellPage from "../pages/SpellPage";
import ChSheetPage from "../pages/ChSheetPage";
import NotFoundPage from "../pages/NotFoundPage";
import Info from "../pages/Info";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

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

      // С вероятностью 10% добавить один красный ромб в случайное место
      if (Math.random() < 0.1) {
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

function ProtectedRoute({ component: Component }) {
   const navigate = useNavigate();
   const location = useLocation();
   const [data, setData] = useState(null);

   const loadDataBasedOnToken = useCallback(
      async (token, componentPath = location.pathname) => {
         try {
            let jsonFile = "";

            if (token === "all") {
               if (componentPath.includes("/info")) {
                  jsonFile = "/data/info.json";
               } else if (componentPath.includes("/sheet")) {
                  jsonFile = "/data/chicken.json";
               }
            } else if (token === "Юджин") {
               if (componentPath.includes("/info")) {
                  jsonFile = "/data/test.json";
               } else if (componentPath.includes("/sheet")) {
                  jsonFile = "/data/eugen.json";
               }
            } else if (token === "Талико") {
               if (componentPath.includes("/info")) {
                  jsonFile = "/data/test.json";
               } else if (componentPath.includes("/sheet")) {
                  jsonFile = "/data/talico.json";
               }
            } else if (token === "Олёй") {
               if (componentPath.includes("/info")) {
                  jsonFile = "/data/test.json";
               } else if (componentPath.includes("/sheet")) {
                  jsonFile = "/data/olay.json";
               }
            } else if (token === "Евлебия") {
               if (componentPath.includes("/info")) {
                  jsonFile = "/data/test.json";
               } else if (componentPath.includes("/sheet")) {
                  jsonFile = "/data/eulebia.json";
               }
            } else {
               navigate("/");
               return;
            }

            const response = await fetch(jsonFile);
            if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
         } catch (error) {
            console.error("Ошибка загрузки данных:", error);
            navigate("/");
         }
      },
      [navigate, location.pathname]
   );

   useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
         navigate("/login");
      } else {
         loadDataBasedOnToken(token, location.pathname);
      }
   }, [navigate, location.pathname, loadDataBasedOnToken]);

   if (!data) {
      return <div>Loading...</div>;
   }

   return <Component props={data} />;
}
