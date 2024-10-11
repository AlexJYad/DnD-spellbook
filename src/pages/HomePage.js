import "../CSS/HomePage.css";
import news from "../data/news.html";

export default function HomePage() {
   const token = localStorage.getItem("token");
   return (
      <div className="inner-main">
         <h1>LOGIN</h1>
         <h2>&#x262F; Black And White &#x262F;</h2>
         <ul className="link-list">
            <li>
               <a
                  href="https://docs.google.com/document/d/1NhxL-2-UMzHXZroaGdHpmkQ82hommwAuRfTjHw4xkOE/edit?tab=t.0#heading=h.6c63uivas3pd"
                  data-symbol="📜"
                  target="_blank"
                  rel="noreferrer"
               >
                  Правила
               </a>
            </li>
            {token !== "test" && (
               <>
                  <li>
                     <a
                        href=" https://drive.google.com/drive/folders/1CNGQq8Rxdielqe_IJ5XP_kt_q3XPxNDb"
                        data-symbol="📂"
                        target="_blank"
                        rel="noreferrer"
                     >
                        Файлы игры
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://w2g.tv/?r=16dtz6alo4ag9jdxby"
                        data-symbol="🎶"
                        target="_blank"
                        rel="noreferrer"
                     >
                        Атмосферная музыка для игры
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://rolldicewithfriends.com/rooms/blackandwight"
                        data-symbol="🎲"
                        target="_blank"
                        rel="noreferrer"
                     >
                        Dice roll
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://docs.google.com/spreadsheets/d/14M-Oa3vs3zgYOY1gd_GiPmWjKFX5l1TY3aZdPUdcfDM/edit?usp=drive_link"
                        data-symbol="📅"
                        target="_blank"
                        rel="noreferrer"
                     >
                        Dating App
                     </a>
                  </li>
               </>
            )}
         </ul>
         <div
            className="news-container"
            dangerouslySetInnerHTML={{ __html: news }}
         />
      </div>
   );
}
