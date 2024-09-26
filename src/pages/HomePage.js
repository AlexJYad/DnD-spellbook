import "../CSS/HomePage.css";

export default function HomePage() {
   const news = `
   <h4>Обновление: Beta 1.0.3</h4>
   <p><em>Дата обновления:</em> <strong>26 сентября 2024 года</strong></p>
   <ul>
     <li>Обновлены данные в разделе <strong>Лор: История и Магия</strong> <em>(требует доработки)</em>.</li>
     <li>Исправлен дизайн формы <strong>логина</strong>.</li>
     <li>Добавлена кнопка <strong>"Наверх"</strong> в разделе <strong>Заклинания</strong>.</li>
     <li><strong>Значительно улучшена производительность сайта!</strong></li>
   </ul>
 `;

   return (
      <div className="inner-main">
         <h1>LOGIN</h1>
         <h2>&#x262F; Black And Wight &#x262F;</h2>
         <div
            className="news-container"
            dangerouslySetInnerHTML={{ __html: news }}
         />
         <ul className="link-list">
            <li>
               <a
                  href="https://docs.google.com/document/d/1NhxL-2-UMzHXZroaGdHpmkQ82hommwAuRfTjHw4xkOE/edit?tab=t.0#heading=h.6c63uivas3pd"
                  data-symbol="📜"
               >
                  Правила
               </a>
            </li>
            <li>
               <a
                  href=" https://drive.google.com/drive/folders/1CNGQq8Rxdielqe_IJ5XP_kt_q3XPxNDb"
                  data-symbol="📂"
               >
                  Файлы игры
               </a>
            </li>
            <li>
               <a href="https://w2g.tv/?r=16dtz6alo4ag9jdxby" data-symbol="🎶">
                  Атмосферная музыка для игры
               </a>
            </li>
            <li>
               <a
                  href="https://rolldicewithfriends.com/rooms/blackandwight"
                  data-symbol="🎲"
               >
                  Dice roll
               </a>
            </li>
            <li>
               <a
                  href="https://docs.google.com/spreadsheets/d/14M-Oa3vs3zgYOY1gd_GiPmWjKFX5l1TY3aZdPUdcfDM/edit?usp=drive_link"
                  data-symbol="📅"
               >
                  Dating App
               </a>
            </li>
         </ul>
      </div>
   );
}
