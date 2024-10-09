import {
   BrowserRouter as Router,
   Route,
   Routes,
   useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Marquee from "./components/Marquee/Marquee";
import MainFrame from "./components/MainFrame/MainFrame";
import Footer from "./components/Footer/Footer";

import LoginPage from "./pages/LoginPage";

function App() {
   const navigate = useNavigate();
   const token = localStorage.getItem("token");

   const marqueeText = "Magic doesn't have Morality";

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
         <Header />
         <Marquee text={marqueeText} />
         <MainFrame />
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
