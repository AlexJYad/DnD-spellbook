import { useEffect } from "react";
import imageAdtUrl from "../img/announcement.png";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LogInLogOut/LoginForm";

export default function LoginPage() {
   const navigate = useNavigate();

   useEffect(() => {
      const isToken = localStorage.getItem("token");

      if (isToken) {
         navigate("/");
      }
   }, [navigate]);

   const description = `
      Добро пожаловать на континент.<br><br>
      Сегодня вы присоединяетесь к виликому<br>путешествию, 
      что изменит этот мир навсегда!
   `;

   const adt = (
      <a href={imageAdtUrl} target="_blank" rel="noopener noreferrer">
         Анонс
      </a>
   );

   const url = [adt];

   return (
      <div class="flex login">
         <div class="spell">
            <div class="headerh2">
               <h2 class="namespell">
                  {"Welcom "}
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
            <div class="remark flex">{url}</div>
            <LoginForm />
         </div>
      </div>
   );
}
