import React from "react";
import AlterImage from "../../img/gods/Alter.jpg";
import SolirusImage from "../../img/gods/Solirus.jpg";
import GantumImage from "../../img/gods/Gantum.jpg";
import CalderosImage from "../../img/gods/Calderos.jpg";
import ShakiranumImage from "../../img/gods/Shakiranum.jpg";
import RotasImage from "../../img/gods/Rotas.jpg";
import TomnitusImage from "../../img/gods/Tomnitus.jpg";
import GoglanoriumImage from "../../img/gods/Goglanorium.jpg";
import ColdImage from "../../img/gods/Cold.jpg";
import FatalImage from "../../img/gods/Fatal.jpg";
import FataImage from "../../img/gods/Fata.jpg";

import img from "../../img/main/main_8.png";

const LoreReligionPage = () => {
   const token = localStorage.getItem("token");
   return (
      <div className="container lore-religion-page">
         <h1>Религия</h1>
         <blockquote>
            <p>
               Молитва от шизофрении отличается только тем, кто с кем говорит.
            </p>
            <footer>— Томас Сас</footer>
         </blockquote>
         <p>
            Боги не ходят по земле и вообще не особо являются простым смертным,
            да и непростым тоже. В мире всё ещё нет единой религии. И чем дальше
            от столицы, тем разнообразнее становятся пантеоны, по большей части
            добавляя различные местные мотивы. Всё это сплетается в сложный
            клубок верований, магии и сказаний. Как вы могли уже заметить, всё в
            мире делят на <span className="white text-outline">светлое</span> и{" "}
            <span className="black">темное</span> (доброе и злое, свое и чужое),
            богов эта чаша тоже не миновала.
         </p>
         <p>
            Основная и насаждаемая светом религия носит название в честь богини
            жизни <span className="white text-outline">Альтер</span> —
            альтерианство. Оно включает в свой пантеон:
         </p>
         <hr data-symbol="BREAK" />
         <details>
            <summary>
               <span className="bold white text-outline">Альтер</span> — творец
               жизни.
            </summary>
            <div className="gods">
               <img src={AlterImage} alt="Альтер — творец жизни." />
               <div>
                  <p className="l">
                     Творец жизни, светлая и нежная девушка, олицетворяющая
                     начало всего живого. Она создала не только саму жизнь, но и
                     гармонию во вселенной, определив естественные циклы роста,
                     рождения и исцеления. Под её покровительством цветут сады,
                     растут леса и раскрываются тайны природы. Её влияние можно
                     почувствовать в каждом живом существе, а её имя произносят
                     в молитвах, когда просят даровать плодородие земле и
                     исцелить болезнь. Альтер — воплощение любви, заботы и
                     бесконечного роста, её образ ассоциируется с бескрайним
                     светом и теплом, олицетворяя бесконечную силу жизни.
                  </p>
               </div>
            </div>
         </details>
         <details>
            <summary>
               <span className="bold white text-outline">Солирус</span> — творец
               света.
            </summary>
            <div className="gods">
               <div>
                  <p className="r">
                     Творец света, несущий меч добра и символизирующий свет,
                     который изгоняет тьму и разрушает нечисть. Он — защитник
                     правды и справедливости, его светлый меч не только
                     уничтожает зло, но и освещает путь всем, кто стремится к
                     истине. В то время как Альтер даёт жизнь, Солирус
                     направляет её, очищая мир от мракобесия и зла. Его мощь
                     ощущается в каждом вспышке света, в каждом луче, который
                     рассеивает туман лжи.
                  </p>
               </div>
               <img src={SolirusImage} alt="Солирус — творец света." />
            </div>
         </details>
         <details>
            <summary>
               <span className="bold white text-outline">Гантум</span> —
               покровитель светлой магии.
            </summary>
            <div className="gods">
               <img
                  src={GantumImage}
                  alt="Гантум — покровитель светлой магии."
               />
               <div>
                  <p className="l">
                     Гантум — покровитель светлой магии. Этот мудрый бог
                     передаёт свои знания и силу тем, кто избрал путь света,
                     обучая магов целеустремлённости и ответственности. Гантум
                     учит, что светлая магия — это не просто сила, но и великая
                     обязанность.{" "}
                  </p>
               </div>
            </div>
         </details>
         <details>
            <summary>
               <span className="bold white text-outline">Кальдерос</span> —
               покровитель морей и торговли.
            </summary>
            <div className="gods">
               <div>
                  <p className="r">
                     Кальдерос — бог морей и торговли, управляет водами океанов
                     и рек, а также всеми путями торговли и обмена. Под его
                     покровительством процветает морская торговля, путешествия и
                     связанная с ними культура обмена знаниями и товарами. Он
                     также символизирует богатство и процветание, помогающее
                     народам связываться друг с другом, и предоставляя
                     возможности для всех, кто стремится к успеху в бизнесе.{" "}
                  </p>
               </div>
               <img
                  src={CalderosImage}
                  alt="Кальдерос — покровитель морей и торговли."
               />
            </div>
         </details>
         <details>
            <summary>
               <span className="bold white text-outline">Шакиранум</span> —
               покровитель земледелия и дождей.
            </summary>
            <div className="gods">
               <img
                  src={ShakiranumImage}
                  alt="Шакиранум — покровитель земледелия и дождей."
               />
               <div>
                  <p className="l">
                     Шакиранум — бог земледелия и дождей, дарует дожди и
                     плодородие, помогающие земле приносить урожай. Его влияние
                     важно для фермеров и землевладельцев, которые молятся ему о
                     хороших урожаях. Шакиранум — воплощение заботы о земле и её
                     благополучии, его сила даёт землю, которая кормит и
                     защищает людей, укрепляя их связь с природой.
                  </p>
               </div>
            </div>
         </details>
         <details>
            <summary>
               Разрушитель мира: <span className="bold">Ротас</span> — самый
               темный из богов, зло зла.
            </summary>
            <div className="gods">
               <div>
                  <p className="r">
                     Ротас — разрушитель мира, олицетворение самого зла, тьмы и
                     хаоса. Его имя вызывает страх и ужас, ибо он несет с собой
                     разрушение всего, что существует. Ротас — бог, который
                     стремится уничтожить гармонию и порядок, нарушая баланс
                     между светом и тьмой. Его присутствие приносит только
                     смерть, разруху и несчастья. Он является воплощением
                     разрушительной силы, не знающей границ, его взгляд обращает
                     мир в прах, а его тень поглощает любое сопротивление. Ротас
                     — темный повелитель, который сеет хаос и страдания,
                     изничтожая всё, что было создано. С ним связаны самые
                     страшные события в истории мира, и его поклонники — это те,
                     кто желает видеть мир в упадке, в вечной тьме и разрушении.
                  </p>
               </div>
               <img
                  className="black"
                  src={RotasImage}
                  alt="Ротас — самый темный из богов, зло зла."
               />
            </div>
         </details>
         <details>
            <summary>
               <span className="bold">Томнитус</span> — творец тьмы и смерти.
            </summary>
            <div className="gods">
               <img
                  className="black"
                  src={TomnitusImage}
                  alt="Томнитус — творец тьмы и смерти."
               />
               <div>
                  <p className="l">
                     Томнитус — творец тьмы и смерти, бог, который управляет
                     силами, связанными с окончанием жизни и вечной тенью. Он
                     является воплощением неизбежного конца, несущим мрак и
                     разрушение на все живое. Его сила проникает в каждый уголок
                     мира, особенно в те моменты, когда жизнь сходит на нет.
                     Томнитус не создает хаос, как Ротас, но его влияние
                     незаметно, но мощно — он тихо и неизбежно забирает души,
                     проводя их в вечное забвение. В его руках — вся тьма,
                     поглощающее свет пространство, где не существует жизни.
                  </p>
               </div>
            </div>
         </details>
         <details>
            <summary>
               <span className="bold">Гогланориум</span> — покровитель неверных
               знаний и еретиков.
            </summary>
            <div className="gods">
               <div>
                  <p className="r">
                     Гогланориум — покровитель неверных знаний и еретиков, бог,
                     чье влияние распространяется на тех, кто отвергает
                     традиционные истины и ищет истину в местах, где другие
                     видят лишь ложь. Он является покровителем тех, кто решается
                     бросить вызов устоявшимся правилам, кто в поисках знаний
                     готов шагнуть за пределы дозволенного. Его последователи
                     часто стремятся к знаниям, которые официально считаются
                     опасными или запретными, будь то магия, философия или даже
                     научные исследования, противоречащие религиозным учениям.
                     Гогланориум является символом хаоса в знаниях, разрушающим
                     обычаи и устоявшиеся догмы. Не не сущий за разрушением
                     истин ничего хорошоего.
                  </p>
               </div>
               <img
                  className="black"
                  src={GoglanoriumImage}
                  alt="Гогланориум — покровитель неверных знаний и еретиков."
               />
            </div>
         </details>
         {(token === "Admin" || token === "Олёй") && (
            <details>
               <summary>
                  <span className="bold">Хладный Мороз</span> — бог темной зимы.
               </summary>
               <div className="gods">
                  <img
                     className="black"
                     src={ColdImage}
                     alt="Хладный Мороз — бог темной зимы."
                  />
                  <div>
                     <p className="l">
                        Хладный Мороз — бог исключительной безысходности и
                        олицетворение вечной зимы. Его царство — мир мертвых,
                        где холода не отступают, а снежные бури вечно стучат в
                        двери, унося последние силы тех, кто оказался в этом
                        холодном и безжизненном мире. Здесь нет ни тепла, ни
                        света, и вечная стужа пронизывает души, заставляя
                        забывать о былых жизнях и надеждах на спасение. Он —
                        бог, чье существование наполнено тягостным и невыносимым
                        одиночеством, где смерть становится лишь временным
                        состоянием, а жизнь в его царстве — это бесконечное
                        мучение от холодного, беспощадного ветра.
                     </p>
                  </div>
               </div>
            </details>
         )}
         <hr data-symbol="BREAK" />
         <p className="l">Также выделяют предбожественных сущностей:</p>
         <p></p>
         <ul className="footnote">
            <li>
               <span className="white text-outline">Сути-я-тумы</span> —
               порождения света, несущие в себе проявления истинного магического
               величия (скорее блуждающие огни, чем ангелы, но зависит от
               региона)
            </li>
            <li className="dark">
               <span className="black">Тени</span> — безликие существа,
               порождения тьмы (по-нашему демоны)
            </li>
         </ul>
         <hr data-symbol="BREAK" />
         <img className="page" src={img} alt="" />
         <hr data-symbol="BREAK" />
         <p>
            Ну и во всяких деревушках бывают свои темные боги топей, светлые
            боги озер и рек, лешие да домовые, и прочее, прочее, прочее… Тут уже
            кто во что горазд. На севере много богов, связанных с зимой и
            холодом, на юге — с виноделием и пустыней. Чаще всего светлые храмы,
            святилища и алтари представляют собой смесь христианской церкви с
            языческими идолами. В южных городах в храмах альтерианской церкви
            при входе стоят идолы бога моря и мореходства Авинтуры, рядом с ним
            покровитель виноделия — Вантуран. В северных, нередко деревянных,
            церквях можно найти изображения матушки Теплой Зимы. Только в
            столице центральный храм полностью посвящен Альтер и её милосердию.
         </p>
         <hr data-symbol="BREAK" />
         <h2>Дополнительные божества</h2>
         <details>
            <summary>
               <span className="bold white text-outline">Фата</span> - госпажа
               судьбы и всех путей
            </summary>
            <div className="gods">
               <div>
                  <p className="r">Фата - госпажа судьбы и всех путей</p>
               </div>
               <img src={FataImage} alt="Фата - госпажа судьбы и всех путей" />
            </div>
         </details>
         <details>
            <summary>
               <span className="bold white text-outline">Фатале</span> -
               госпожа/господин судьбы и смерти
            </summary>
            <div className="gods">
               <img
                  src={FatalImage}
                  alt="Фатале - госпожа/господин судьбы и смерти"
               />
               <div>
                  <p className="l">Фатале - госпожа/господин судьбы и смерти</p>
               </div>
            </div>
         </details>
      </div>
   );
};

export default LoreReligionPage;