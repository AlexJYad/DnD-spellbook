import Ability from "../components/Ability";
// import Saves from "../components/Saves";
import SpellesSlots from "../components/SpellesSlots";
import "../CSS/chSheet.css";
import { useEffect, useState } from "react";
import scr from "../img/background/c-frame.webp";
import { getNum } from "../utils/getNum";
import { getValues } from "../utils/getValues";
import sign from "../img/background/frame-signature.webp";

export default function ChSheetPage(props) {
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
                     <div id="age" className="flag">
                        <h3>Возраст</h3>
                        <p>{info.age}</p>
                     </div>
                     <div className="flag m-flag">
                        <h3>Опыт</h3>
                        <p>{info.experience}</p>
                     </div>
                     <div className="flag">
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
                     <div className="ability">
                        <div className="flag">
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
                  <div className="crown">
                     <p>&#10022;</p>
                  </div>
                  <div className="crystal-ball">
                     <div className="attentiveness">
                        <h2>{attentiveness}</h2>
                        <p>Внимание</p>
                     </div>
                  </div>
                  <div className="dice white-shadow">
                     <p>{info.main}</p>
                  </div>
                  <div className="vision">
                     <p>Зрение: О</p>
                  </div>
               </div>

               <div className="health-hits">
                  <div className="helth-hits-temporary">
                     <div className="helth-counter-wrapper">
                        <button
                           className="increment count-input-btn hits"
                           onClick={incrementTemporaryHits}
                           disabled={temporaryHits === 15}
                        >
                           +
                        </button>
                        <input
                           type="text"
                           className="count-input hits"
                           value={temporaryHits}
                           readOnly
                        />

                        <button
                           className="decrement count-input-btn hits"
                           onClick={decrementTemporaryHits}
                           disabled={temporaryHits === 0}
                        >
                           -
                        </button>
                     </div>
                     <div className="helth-hits-temporary-text">
                        <p>Временные Хиты</p>
                     </div>
                  </div>
                  <div className="health-hits-main">
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
                        className="increment count-input-btn"
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
                        className="decrement count-input-btn in"
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

               {/* 
               <Saves /> */}
               {/* 
               <div class="textarea-1">
                  <textarea name="" id="" c>
                     Пицца с ананасами
                  </textarea>
               </div> */}
            </div>
         </div>
      </>
   );
}
