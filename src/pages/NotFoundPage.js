import React from "react";
import Back from "../components/Back";

function NotFoundPage() {
   return (
      <div className="container">
         <div className="spell not-found">
            <h1>404 Page Not Found</h1>
            <div class="blockremark back">
               <div class="remark back">
                  <Back />
               </div>
            </div>
         </div>
      </div>
   );
}

export default NotFoundPage;
