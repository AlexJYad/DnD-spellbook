import Ability from "../../components/ProfileSheet/Ability";
import Saves from "../../components/ProfileSheet/Saves";
import SpellesSlots from "../../components/ProfileSheet/SpellesSlots";
import "../../components/ProfileSheet/chSheet.css";
import { useEffect, useState } from "react";
import scr from "../../img/background/c-frame.webp";
import { getNum } from "../../utils/getNum";
import { getValues } from "../../utils/getValues";
import sign from "../../img/background/frame-signature.webp";

export default function ProfileSheetPage(props) {
   useEffect(() => {
      document.title = "Лист Персонажа";
   }, []);

   // Состояния для разных счетчиков
   const [temporaryHits, setTemporaryHits] = useState(0); // Временные хиты
   const [initiative, setInitiative] = useState(0); // Инициатива

   // Функции для временных хитов
   const incrementTemporaryHits = () => {
      setTemporaryHits((prevValue) => Math.min(prevValue + 1, 15)); // Максимум 15
   };

   const decrementTemporaryHits = () => {
      setTemporaryHits((prevValue) => Math.max(prevValue - 1, 0)); // Минимум 0
   };

   // Функции для инициативы
   const incrementInitiative = () => {
      setInitiative((prevValue) => Math.min(prevValue + 1, 15)); // Максимум 15
   };

   const decrementInitiative = () => {
      setInitiative((prevValue) => Math.max(prevValue - 1, 0)); // Минимум 0
   };

   const info = props[0];
   const abilities = props[1];
   const nums = props[2].num;
   const HP =
      8 +
      getNum(abilities.constitution.level) +
      (getValues(info.experience).level - 1) *
         (5 + getNum(abilities.constitution.level));
   const AC = 10 + getNum(abilities.dexterity.level) + info.ACbonus;
   const attentiveness = 10 + getNum(abilities.wisdom.level);

   const scroll = props[3].scroll;
   const weapon = props[3].weapon;
   const inventory = props[3].inventory;

   const getVision = () => {
      if (!props[4].color[1]) {
         return <p className={props[4].color[0]}>&#10022;</p>;
      } else if (props[4].color[1]) {
         return (
            <>
               <p className={props[4].color[0]}>&#10022;</p>
               <p className={`${props[4].color[1]} second`}>&#10022;</p>
            </>
         );
      }
      return "none";
   };

   const getMagic = () => {
      if (!props[5].magic[1]) {
         return <p className={props[5].magic[0]}>&#10022;</p>;
      } else if (props[5].magic[1]) {
         return (
            <>
               <p className={props[5].magic[0]}>&#10022;</p>
               <p className={`${props[5].magic[1]} second`}>&#9852;</p>
               <p className={`${props[5].magic[1]} third`}>&#9762;</p>
               <p className={`${props[5].magic[0]} fourth`}>&#10057;</p>
            </>
         );
      }
      return "none";
   };
   const money = props[6]?.money || {};

   return (
      <>
         <div className="sheet">
            <div className="custom-border">
               <img src={scr} alt="Top Left" className="corner-img top-left" />
               <img
                  src={scr}
                  alt="Top Right"
                  className="corner-img top-right"
               />
               <img
                  src={scr}
                  alt="Bottom Left"
                  className="corner-img bottom-left"
               />
               <img
                  src={scr}
                  alt="Bottom Right"
                  className="corner-img bottom-right"
               />
               <img src={sign} alt="signature" className="signature" />
               <div className="mobile-grid">
                  <div className="flagstop">
                     <div id="age" className="flag sheet--img-bg">
                        <h3>Возраст</h3>
                        <p>{info.age}</p>
                     </div>
                     <div className="flag flag__second sheet--img-bg">
                        <h3>Опыт</h3>
                        <p>{info.experience}</p>
                     </div>
                     <div className="flag sheet--img-bg">
                        <h3>Уровень</h3>
                        <p>{getValues(info.experience).level}</p>
                     </div>
                  </div>
                  <div className="namebox">
                     <div className="namebox_p">
                        <p>{info.name}</p>
                     </div>
                  </div>

                  <div className="abilities">
                     <div className="ability sheet--styled-container">
                        <div className="flag sheet--img-bg">
                           <div className="num">
                              {getValues(info.experience).proficiencyname}
                           </div>
                        </div>
                        <div className="name">Бонус Мастерства</div>
                     </div>
                     {Object.keys(abilities).map((key) => (
                        <Ability
                           key={abilities[key].id}
                           {...abilities[key]}
                           proficiencyname={
                              getValues(info.experience).proficiencyname
                           }
                        />
                     ))}
                  </div>
               </div>
               <div className="spelles">
                  {nums.map((num, index) => (
                     <SpellesSlots key={index} level={index + 1} num={num} />
                  ))}
               </div>
               <div className="parameters">
                  <div className="crown sheet--img-bg flex">{getMagic()}</div>
                  <div className="crystal-ball sheet--img-bg flex">
                     <div className="attentiveness">
                        <h2>{attentiveness}</h2>
                        <p>Внимание</p>
                     </div>
                  </div>
                  <div className="dice white-shadow sheet--img-bg flex">
                     <p>{info.main}</p>
                  </div>
                  <div className="vision sheet--img-bg flex">{getVision()}</div>
               </div>

               <div className="health-hits">
                  <div className="helth-hits-temporary sheet--img-bg">
                     <div className="helth-counter-wrapper">
                        <button
                           className="btn decrement count-input-btn hits"
                           onClick={decrementTemporaryHits}
                           disabled={temporaryHits === 0}
                        >
                           -
                        </button>

                        <input
                           type="text"
                           className="count-input hits"
                           value={temporaryHits}
                           readOnly
                        />
                        <button
                           className="btn increment count-input-btn hits"
                           onClick={incrementTemporaryHits}
                           disabled={temporaryHits === 15}
                        >
                           +
                        </button>
                     </div>
                     <div className="helth-hits-temporary-text">
                        <p>Временные Хиты</p>
                     </div>
                  </div>
                  <div className="health-hits-main sheet--img-bg">
                     <div className="health-hits-main-dice">
                        <h2>{}d8</h2>
                        <p>кость здоровья</p>
                     </div>
                  </div>
               </div>

               <div className="health">
                  <div className="AC">
                     <h4>Класс Брони</h4>
                     <div className="shield">
                        <h1>{AC}</h1>
                     </div>
                  </div>
                  <div className="HP-max">
                     <p>max</p>
                     <p className="HP-max-num">{HP}</p>
                  </div>
                  <div className="HP">
                     <div className="heart">
                        <h1>{info.HP}</h1>
                     </div>
                     <p>Текущее</p>
                  </div>
               </div>

               <div className="sabaton">
                  <p className="initiative white-shadow">Инициатива</p>
                  <div className="initiative-counter-wrapper">
                     <button
                        className="btn increment count-input-btn"
                        onClick={incrementInitiative}
                        disabled={initiative === 15}
                     >
                        +
                     </button>
                     <input
                        type="text"
                        className="count-input"
                        value={initiative}
                        readOnly
                     />

                     <button
                        className="btn decrement count-input-btn in"
                        onClick={decrementInitiative}
                        disabled={initiative === 0}
                     >
                        -
                     </button>
                  </div>
                  <p className="speed white-shadow">Скорость</p>
                  <div className="speed-counter-num">
                     <h2>30</h2>
                  </div>
                  <div className="speed-counter-count">
                     <h3>(6k)</h3>
                  </div>
               </div>
               <Saves />
               <div className="sheet--container-scroll sheet--img-bg">
                  <div className="sheet--scroll-name bold name-small">
                     Навыки и<br />
                     Способности
                  </div>
                  <div className="sheet--ularea sheet--ularea-scroll">
                     <ul>
                        {scroll.map((item, index) => (
                           <li key={index}>{item}</li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="sheet--coins sheet--img-bg">
                  <div className="sheet--coins-grid">
                     <div className="sheet--coin sheet--coin__cp flex">
                        {money.cp || 0} {/* Показывает 0, если money.cp нет */}
                     </div>
                     <div className="sheet--coin sheet--coin__sp flex">
                        {money.sp || 0} {/* Показывает 0, если money.sp нет */}
                     </div>
                     <div className="sheet--coin sheet--coin__ep flex">
                        {money.ep || 0} {/* Показывает 0, если money.ep нет */}
                     </div>
                     <div className="sheet--coin sheet--coin__gp flex">
                        {money.gp || 0} {/* Показывает 0, если money.gp нет */}
                     </div>
                     <div className="sheet--coin sheet--coin__pp flex">
                        {money.pp || 0} {/* Показывает 0, если money.pp нет */}
                     </div>
                  </div>
               </div>
               <div className="sheet--styled-container sheet--weapon flex">
                  <div className="sheet--weapon-name sheet--img-bg flex bold">
                     Оружие
                  </div>
                  <div className="sheet--weapon-list">
                     <table>
                        <thead>
                           <tr>
                              <th>Название</th>
                              <th>Урон</th>
                              <th>Тип</th>
                              <th>Дистанция</th>
                              <th>БП</th>
                              <th>Свойства</th>
                           </tr>
                        </thead>
                        <tbody>
                           {weapon.map((items, index) => (
                              <tr key={index}>
                                 {items.map((item, itemIndex) => (
                                    <td key={itemIndex}>{item}</td>
                                 ))}
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
               <div className="sheet--styled-container sheet--inventory flex">
                  <div className="sheet--inventory-name sheet--img-bg flex bold">
                     Инвентарь
                  </div>
                  <div className="sheet--inventory-list flex">
                     <ul>
                        {inventory
                           .slice(0, Math.ceil(inventory.length / 2))
                           .map((item, index) => (
                              <li key={index}>{item}</li>
                           ))}
                     </ul>
                     <ul>
                        {inventory
                           .slice(Math.ceil(inventory.length / 2))
                           .map((item, index) => (
                              <li key={index}>{item}</li>
                           ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
