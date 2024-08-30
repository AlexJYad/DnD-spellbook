import Ability from "../components/Ability";
// import Saves from "../components/Saves";
import SpellesSlots from "../components/SpellesSlots";
import "../CSS/chSheet.css";
import { useEffect } from "react";
import scr from "../img/background/c-frame.png";
import { getNum } from "../utils/getNum";

export default function ChSheetPage(props) {
   useEffect(() => {
      document.title = "Лист Персонажа";
   }, []);

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
                     <h1>{AC}</h1>
                  </div>
                  <div className="HP-max">
                     <p>max</p>
                     <p className="HP-max-num">{HP}</p>
                  </div>
                  <div className="HP">
                     <h1>{info.HP}</h1>
                     <p>Текущее</p>
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

function getValues(experience) {
   if (experience >= 0 && experience < 300) {
      return { level: 1, proficiencyname: 2 };
   } else if (experience >= 300 && experience < 900) {
      return { level: 2, proficiencyname: 2 };
   } else if (experience >= 900 && experience < 2700) {
      return { level: 3, proficiencyname: 2 };
   } else if (experience >= 2700 && experience < 6500) {
      return { level: 4, proficiencyname: 2 };
   } else if (experience >= 6500 && experience < 14000) {
      return { level: 5, proficiencyname: 3 };
   } else if (experience >= 14000 && experience < 23000) {
      return { level: 6, proficiencyname: 3 };
   } else if (experience >= 23000 && experience < 34000) {
      return { level: 7, proficiencyname: 3 };
   } else if (experience >= 34000 && experience < 48000) {
      return { level: 8, proficiencyname: 3 };
   } else if (experience >= 48000 && experience < 64000) {
      return { level: 9, proficiencyname: 4 };
   } else if (experience >= 64000 && experience < 85000) {
      return { level: 10, proficiencyname: 4 };
   } else if (experience >= 85000 && experience < 100000) {
      return { level: 11, proficiencyname: 4 };
   } else if (experience >= 100000 && experience < 120000) {
      return { level: 12, proficiencyname: 4 };
   } else if (experience >= 120000 && experience < 140000) {
      return { level: 13, proficiencyname: 5 };
   } else if (experience >= 140000 && experience < 165000) {
      return { level: 14, proficiencyname: 5 };
   } else if (experience >= 165000 && experience < 195000) {
      return { level: 15, proficiencyname: 5 };
   } else if (experience >= 195000 && experience < 225000) {
      return { level: 16, proficiencyname: 5 };
   } else if (experience >= 225000 && experience < 265000) {
      return { level: 17, proficiencyname: 6 };
   } else if (experience >= 265000 && experience < 305000) {
      return { level: 18, proficiencyname: 6 };
   } else if (experience >= 305000 && experience < 355000) {
      return { level: 19, proficiencyname: 6 };
   } else if (experience >= 355000) {
      return { level: 20, proficiencyname: 6 };
   } else {
      return { level: null, proficiencyname: null }; // Возвращаем null для некорректного значения
   }
}
