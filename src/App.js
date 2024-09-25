import {
   BrowserRouter as Router,
   Route,
   Routes,
   useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import Main from "./components/Main";
import TopBar from "./components/TopBar";
import Marquee from "./components/Marquee";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";

function App() {
   const navigate = useNavigate();
   const token = localStorage.getItem("token");

   // Используем useEffect для перенаправления
   useEffect(() => {
      if (!token) {
         navigate("/login");
      }
   }, [token, navigate]);

   // Если токен отсутствует, возвращаем null, чтобы ничего не рендерить до перенаправления
   if (!token) {
      return null;
   }

   return (
      <div className="App">
         <TopBar />
         <Marquee text="Никто не знает когда будет игра. Обновлена История в разделе Лор!    Исправлена форма логина! Добавлена Магия в разделе Лор - требует доработки" />
         <Main />
         <Footer />
      </div>
   );
}

export default function AppWrapper() {
   return (
      <Router>
         <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<App />} />
         </Routes>
      </Router>
   );
}
