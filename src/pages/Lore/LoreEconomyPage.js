import React from "react";

const LoreEconomyPage = () => {
   return (
      <div className="container lore-economy-page">
         <h1>Экономика</h1>
         <p>
            После завершения войны 12 лет назад экономика мира оказалась в
            упадке. Разрушенные города, разграбленные поля и нехватка рабочих
            рук привели к росту цен на основные товары и усложнению торговли. В
            нынешнее время экономическая ситуация разделяет общество на два
            крупных слоя: богатую элиту, обладающую значительными ресурсами, и
            бедные семьи, едва сводящие концы с концами. Средний класс редок и
            чаще всего состоит из торговцев или тех, кто может предложить редкие
            навыки.
         </p>
         <h2>Валюта</h2>
         <p>
            Экономика основана на пяти типах монет: медных (
            <span className="bold">cp</span>), серебряных (
            <span className="bold">sp</span>), электриумных (
            <span className="bold">ep</span>), золотых (
            <span className="bold">gp</span>) и платиновых (
            <span className="bold">pp</span>). Электриум используется редко и
            чаще всего встречается в крупных торговых сделках или в коллекциях
            нумизматов.
         </p>
         <ul className="footnote">
            <li>
               <span className="bold">1</span> платиновая монета (
               <span className="bold">pp</span>) ={" "}
               <span className="bold">10</span> золотых монет (
               <span className="bold">gp</span>)
            </li>
            <li>
               <span className="bold">1</span> золотая монета (
               <span className="bold">gp</span>) ={" "}
               <span className="bold">2</span> электриумные монеты (
               <span className="bold">ep</span>)
            </li>
            <li>
               <span className="bold">1</span> электриумная монета (
               <span className="bold">ep</span>) ={" "}
               <span className="bold">5</span> серебряных монет (
               <span className="bold">sp</span>)
            </li>
            <li>
               <span className="bold">1</span> серебряная монета (
               <span className="bold">sp</span>) ={" "}
               <span className="bold">10</span> медных монет (
               <span className="bold">cp</span>)
            </li>
         </ul>
         <h2>Примеры цен</h2>
         <p>
            В нынешних условиях даже базовые продукты могут быть недоступны для
            беднейших слоёв населения. Вот примерная стоимость некоторых
            товаров:
         </p>
         <ul className="footnote">
            <li>
               Буханка чёрного хлеба: <span className="bold">1 cp</span>
            </li>
            <li>
               Буханка белого хлеба: <span className="bold">2 cp</span>
            </li>
            <li>
               Пинта эля: <span className="bold">4 cp</span>
            </li>
            <li>
               Пинта медовухи: <span className="bold">2 sp</span>
            </li>
            <li>
               Кружка пива: <span className="bold">4 cp</span>
            </li>
            <li>
               Чаша вина: <span className="bold">2 sp</span>
            </li>
            <li>
               Бутылка хорошего вина: <span className="bold">10 gp</span>
            </li>
            <li>
               Простая еда в таверне: <span className="bold">3 cp</span>
            </li>
            <li>
               Средняя еда в таверне: <span className="bold">3 sp</span>
            </li>
            <li>
               Роскошная еда: <span className="bold">2 gp</span>
            </li>
            <li>
               Карта местности: <span className="bold">50 gp</span>
            </li>
            <li>
               Книга: <span className="bold">25 gp</span>
            </li>
         </ul>
         <h2>Социальное разделение</h2>
         <p>
            Богатая элита может позволить себе роскошные трапезы, редкие вина и
            книги. Их состояние основано на торговле, земельной собственности и
            участии в управлении. Бедные семьи довольствуются хлебом, кашей и
            редкими кружками эля. Торговцы играют ключевую роль в поддержании
            экономики, перевозя товары между городами и деревнями. После войны
            путешествия стали опасными, и многие торговцы нанимают охранников,
            что дополнительно увеличивает цену на их товары.
         </p>
         <p></p>
         <h2>Региональные особенности</h2>
         <p>
            Южные регионы, ориентированные на торговлю и мореплавание, быстрее
            восстановились после войны. Там цены на рыбу и специи остаются
            доступными. Центральные земли, где основное население занимается
            земледелием, страдают от нехватки удобрений и урожая, что
            увеличивает стоимость хлеба и зерна.
         </p>
      </div>
   );
};

export default LoreEconomyPage;
