import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NotFoundPage() {
   const navigate = useNavigate();
   const location = useLocation();

   const handleBack = () => {
      // Если текущий путь - корневой путь, не переходим назад
      if (location.pathname === "/") {
         return;
      }
      navigate(-1); // Переход на предыдущую страницу
   };
   return (
      <div className="container-404 flex flex-column">
         <h1>404 Page Not Found</h1>
         <button onClick={handleBack} className="btn">
            <h2>Back</h2>
         </button>
      </div>
   );
}

export default NotFoundPage;
