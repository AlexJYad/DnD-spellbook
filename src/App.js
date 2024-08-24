import React, { useState, useEffect, useCallback } from "react";
import {
   BrowserRouter as Router,
   Route,
   Routes,
   useNavigate,
   useLocation,
} from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RulesPage from "./pages/RulesPage";
import SpellPage from "./pages/SpellPage";
import ChSheetPage from "./pages/ChSheetPage";
import NotFoundPage from "./pages/NotFoundPage";
import Info from "./pages/Info";

function App() {
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
         </div>
      </Router>
   );
}

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
         navigate("/");
      } else {
         loadDataBasedOnToken(token, location.pathname);
      }
   }, [navigate, location.pathname, loadDataBasedOnToken]);

   if (!data) {
      return <div>Loading...</div>;
   }

   return <Component props={data} />;
}

export default App;
