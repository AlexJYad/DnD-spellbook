import React from "react";
import AlterImage from "../../img/gods/Alter.jpg";
import SolirusImage from "../../img/gods/Solirus.jpg";
import GantumImage from "../../img/gods/Gantum.jpg";
import CalderosImage from "../../img/gods/Calderos.jpg";
import ShakiranumImage from "../../img/gods/Shakiranum.jpg";
import RotasImage from "../../img/gods/Rotas.jpg";
import TomnitusImage from "../../img/gods/Tomnitus.jpg";
import GoglanoriumImage from "../../img/gods/Goglanorium.jpg";

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
         <details>
            <summary>
               <span className="bold white text-outline">Альтер</span> — творец
               жизни.
            </summary>
            <div className="gods">
               <img src={AlterImage} alt="Альтер — творец жизни." />
               <div>
                  <p className="l">Альтер — творец жизни</p>
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
                     Солирус — творец света, несущий меч добра.
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
                  <p className="l">Гантум — покровитель светлой магии.</p>
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
                  <p className="r">Кальдерос — покровитель морей и торговли.</p>
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
                     Шакиранум — покровитель земледелия и дождей.
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
                     Разрушитель мира: Ротас — самый темный из богов, зло зла.
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
                  <p className="l">Томнитус — творец тьмы и смерти.</p>
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
                     Гогланориум — покровитель неверных знаний и еретиков.
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
                     src={TomnitusImage}
                     alt="Хладный Мороз — бог темной зимы."
                  />
                  <div>
                     <p className="l">Хладный Мороз — бог темной зимы.</p>
                  </div>
               </div>
            </details>
         )}

         <p className="l">Также выделяют предбожественных сущностей:</p>
         <ul className="footnote">
            <li>
               Сути-я-тумы — порождения света, несущие в себе проявления
               истинного магического величия (скорее блуждающие огни, чем
               ангелы, но зависит от региона)
            </li>
            <li>
               Тени — безликие существа, порождения тьмы (по-нашему демоны)
            </li>
         </ul>
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
            столице центральный храм полностью посвящен Альтер и её милосердию
         </p>
      </div>
   );
};

export default LoreReligionPage;
