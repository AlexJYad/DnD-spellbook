import Ability from "../components/Ability";
// import Saves from "../components/Saves";
import SpellesSlots from "../components/SpellesSlots";
import "../CSS/chSheet.css";
import { useEffect, useState } from "react";
import scr from "../img/background/c-frame.png";
import { getNum } from "../utils/getNum";
import { getValues } from "../utils/ getValues";
import sign from "../img/background/frame-signature.png";

export default function ChSheetPage(props) {
   useEffect(() => {
      document.title = "Лист Персонажа";
   }, []);

   const [value, setValue] = useState(0);

   const increment = () => {
      setValue((prevValue) => prevValue + 1);
   };

   const decrement = () => {
      setValue((prevValue) => prevValue - 1);
   };

   // console.log(props);

   const info = props[0];
   const abilities = props[1];
   const nums = props[2].num;
   const HP =
      8 +
      getNum(abilities.constitution.level) +
      (getValues(info.experience).level - 1) *
         (5 + getNum(abilities.constitution.level));
   const AC = 10 + getNum(abilities.dexterity.level) + info.ACbonus;

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
                  <p className="initiative">Инициатива</p>
                  <div className="initiative-counter-wrapper">
                     <button
                        className="increment initiative-input-btn"
                        onClick={increment}
                        disabled={value === 15}
                     >
                        +
                     </button>
                     <input
                        type="text"
                        className="initiative-input"
                        value={value}
                        readOnly
                     />

                     <button
                        className="decrement initiative-input-btn"
                        onClick={decrement}
                        disabled={value === 0}
                     >
                        -
                     </button>
                  </div>
                  {/* <p>Скорость</p>{" "}
                  <h2>
                     30
                     <br />
                     (6к)
                  </h2> */}
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
