// import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function Nav({ title, description, url }) {
   return (
      <div id="main" class="container index">
         <div class="spell">
            <div class="headerh2">
               <h2 class="namespell">
                  {title + " "}
                  <a href={"/"}>
                     <i class="fa-solid fa-mortar-pestle"></i>
                  </a>
               </h2>
            </div>
            {description && (
               <p
                  class="description main"
                  dangerouslySetInnerHTML={{ __html: description }}
               ></p>
            )}
            <LoginForm />
            <div class="blockremark back">
               {url.map((url, index) => (
                  <div key={index} class="remark">
                     {url}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
