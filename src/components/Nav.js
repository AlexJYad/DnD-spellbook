import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import Back from "./Back";

export default function Nav({ title, description, url }) {
   const location = useLocation();
   const navigate = useNavigate();
   const isHomePage = location.pathname === "/";

   const isToken = localStorage.getItem("token");

   const handleOut = () => {
      localStorage.removeItem("token");
      navigate("/");
   };

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
            {isHomePage && !isToken && <LoginForm />}
            <div class="blockremark back">
               {isHomePage && isToken && (
                  <>
                     <div class="remark">
                        <a href={"/sheet"}>Лист Персонажа</a>
                     </div>
                     <div class="remark">
                        <a href={"/spell"}>Заклинанния</a>
                     </div>
                  </>
               )}
               {url.map((url, index) => (
                  <div key={index} class="remark">
                     {url}
                  </div>
               ))}
               {!isHomePage && (
                  <div class="remark back">
                     {" "}
                     <Back />{" "}
                  </div>
               )}
               {isToken && (
                  <div class="remark back">
                     <button onClick={handleOut}>LogOff</button>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
