import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
   const navigate = useNavigate();
   const handleBack = () => {
      navigate(-1); // Переход на предыдущую страницу
   };
   return (
      <div className="container">
         <div className="spell not-found">
            <h1>404 Page Not Found</h1>
            <div class="blockremark back">
               <div class="remark back">
                  <a onClick={handleBack}>Back</a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default NotFoundPage;
