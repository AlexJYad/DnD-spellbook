import React from "react";
import img from "../../img/main/main_3.png";
import img2 from "../../img/main/main_6.png";

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
         <hr data-symbol="BREAK" />
         <img className="page" src={img} alt="" />
         <hr data-symbol="BREAK" />
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
         <hr data-symbol="BREAK" />
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
         <hr data-symbol="BREAK" />
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
         <hr data-symbol="BREAK" />
         <h2>Региональные особенности</h2>
         <p>
            Южные регионы, ориентированные на торговлю и мореплавание, быстрее
            восстановились после войны. Там цены на рыбу и специи остаются
            доступными. Центральные земли, где основное население занимается
            земледелием, страдают от нехватки удобрений и урожая, что
            увеличивает стоимость хлеба и зерна.
         </p>
         <hr data-symbol="BREAK" />
         <h2>Караваны</h2>
         <p>
            Караваны играют важную роль в экономике и связях между регионами,
            особенно после разрушительной войны. Они ходят в основном связанными
            повозками, чтобы обеспечивать безопасность и оптимизировать
            перевозку товаров.
         </p>
         <hr data-symbol="BREAK" />
         <img className="page" src={img2} alt="" />
         <hr data-symbol="BREAK" />
         <h4>Большой коронный круг</h4>
         <p>
            Крупнейшие караваны следуют маршрутом, известным как большой
            караванный круг. Этот маршрут охватывает все светлые земли и
            занимает целый год. После завершения пути караваны делают годичный
            перерыв для подготовки, ремонта повозок и сбора новых товаров.
         </p>
         <p>
            Таких караванов немного — их насчитывается не более{" "}
            <span className="bold">4</span>. Они славятся своей стабильностью и
            важностью для региональной торговли, а также привлекают большое
            внимание, поскольку часто перевозят редкие или ценные товары.
         </p>
         <hr data-symbol="BREAK" />
         <h4>Малый круг караванов</h4>
         <p>
            Помимо большого круга, существуют караваны малого круга. Они
            преимущественно курсируют между южной и главной столицей. В отличие
            от караванов большого круга, маршруты малого круга не являются
            стабильными и могут изменяться в зависимости от сезона, потребностей
            торговли или опасностей на дорогах.
         </p>
         <p>
            Такие караваны более мобильны и разнообразны в своей деятельности,
            иногда действуя как временные рынки в отдалённых деревнях, куда
            редко добираются торговцы.
         </p>
         <hr data-symbol="BREAK" />
         <h4>Караваны прошлого</h4>
         <p>
            По слухам, до войны существовали караваны, которые могли пересекать
            весь континент. Эти легендарные торговые пути были символом единства
            и процветания, однако после войны они прекратили существование из-за
            разрушений, опасностей на дорогах и политической нестабильности.
         </p>
         <p>
            Сегодня истории о таких караванах обрастают мифами и часто
            упоминаются в песнях и сказаниях.
         </p>
      </div>
   );
};

export default LoreEconomyPage;
