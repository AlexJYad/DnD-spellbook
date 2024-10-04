import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ component: Component }) {
   const navigate = useNavigate();
   const location = useLocation();
   const [data, setData] = useState(null);

   const loadDataBasedOnToken = useCallback(
      async (token, componentPath = location.pathname) => {
         try {
            let jsonFiles = [];

            if (token === "all" && componentPath.includes("/sheet")) {
               // Загрузка нескольких файлов для случая "all" и "/sheet"
               jsonFiles = [
                  "/data/chicken.json",
                  "/data/eugen.json",
                  "/data/talico.json",
                  "/data/olay.json",
                  "/data/eulebia.json",
               ];
            } else if (token === "Юджин") {
               if (componentPath.includes("/info")) {
                  jsonFiles = ["/data/test.json"];
               } else if (componentPath.includes("/sheet")) {
                  jsonFiles = ["/data/eugen.json"];
               }
            } else if (token === "Талико") {
               if (componentPath.includes("/info")) {
                  jsonFiles = ["/data/test.json"];
               } else if (componentPath.includes("/sheet")) {
                  jsonFiles = ["/data/talico.json"];
               }
            } else if (token === "Олёй") {
               if (componentPath.includes("/info")) {
                  jsonFiles = ["/data/test.json"];
               } else if (componentPath.includes("/sheet")) {
                  jsonFiles = ["/data/olay.json"];
               }
            } else if (token === "Евлебия") {
               if (componentPath.includes("/info")) {
                  jsonFiles = ["/data/test.json"];
               } else if (componentPath.includes("/sheet")) {
                  jsonFiles = ["/data/eulebia.json"];
               }
            } else {
               navigate("/");
               return;
            }

            // Загрузка всех файлов параллельно
            const responses = await Promise.all(
               jsonFiles.map((file) => fetch(file))
            );

            // Проверка всех ответов и обработка данных
            const results = await Promise.all(
               responses.map((response) => {
                  if (!response.ok) {
                     throw new Error(`HTTP error! Status: ${response.status}`);
                  }
                  return response.json();
               })
            );

            // Сохранение данных в состоянии
            setData(results);
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

   const ToggleableComponent = ({ name, children }) => {
      const [isOpen, setIsOpen] = useState(true);

      const toggleOpen = () => {
         setIsOpen(!isOpen);
      };

      return (
         <div className="toggleable-component">
            <div
               className="header"
               onClick={toggleOpen}
               style={{ cursor: "pointer" }}
            >
               <button className="btn toggleable-btn">
                  <h2>{name}</h2>
               </button>
            </div>
            {!isOpen && <div className="content">{children}</div>}
         </div>
      );
   };

   return (
      <>
         {data.length === 1 ? (
            // Если данные из одного файла, отображаем компонент стандартно
            <Component {...data[0]} />
         ) : (
            // Если несколько файлов, оборачиваем их в flex-контейнер
            <div className="sheets">
               {data.map((item, index) => (
                  <ToggleableComponent key={index} name={item[0].name}>
                     <Component {...item} />
                  </ToggleableComponent>
               ))}
            </div>
         )}
      </>
   );
}
