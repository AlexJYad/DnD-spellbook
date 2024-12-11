import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { transliterate } from "transliteration";

export default function ProtectedRoute({ component: Component }) {
   const navigate = useNavigate();
   const location = useLocation();
   const [data, setData] = useState(null);

   const loadDataBasedOnToken = useCallback(
      async (token, componentPath = location.pathname) => {
         console.log(transliterate(token));
         try {
            let jsonFiles = [];

            switch (token) {
               case "Admin":
                  if (componentPath.includes("/sheet")) {
                     jsonFiles = [
                        "/data/sheet/chicken.json",
                        "/data/sheet/yudzhin.json",
                        "/data/sheet/taliko.json",
                        "/data/sheet/olyoy.json",
                        "/data/sheet/evlebiya.json",
                        "/data/sheet/test.json",
                     ];
                  } else if (componentPath.includes("/character")) {
                     jsonFiles = [
                        "/data/story/yudzhin.json",
                        "/data/story/olyoy.json",
                        "/data/story/taliko.json",
                        "/data/story/evlebiya.json",
                        "/data/story/test.json",
                     ];
                  }
                  break;

               case "Юджин":
               case "Талико":
               case "Олёй":
               case "Евлебия":
               case "test":
                  switch (true) {
                     case componentPath.includes("/character"):
                        jsonFiles = [
                           `/data/story/${transliterate(
                              token
                           ).toLowerCase()}.json`,
                        ];
                        break;
                     case componentPath.includes("/sheet"):
                        jsonFiles = [
                           `/data/sheet/${transliterate(
                              token
                           ).toLowerCase()}.json`,
                        ];
                        break;
                     default:
                        navigate("/");
                        return;
                  }
                  break;

               default:
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
