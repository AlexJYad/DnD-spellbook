import Ability from "../components/Ability";
// import Saves from "../components/Saves";
import SpellesSlots from "../components/SpellesSlots";
import "../CSS/chSheet.css";
import { useEffect } from "react";

export default function ChSheetPage({ props }) {
   useEffect(() => {
      document.title = "Лист Персонажа";
   }, []);

   const info = props[0];
   const abilities = props[1];
   const flagstop = props[2];
   const nums = props[3].num;

   return (
      <>
         <div class="sheet">
            <div class="namebox">
               <div class="namebox_p">
                  <p>{info.name}</p>
               </div>
            </div>

            <div class="abilities">
               <div id="proficiencyBonus" class="ability">
                  <div class="flag">
                     <div class="num">{info.proficiencyname}</div>
                  </div>
                  <div class="proficiencyname safe">Бонус Мастерства</div>
               </div>
               {Object.keys(abilities).map((key) => (
                  <Ability key={abilities[key].id} {...abilities[key]} />
               ))}
            </div>
            <div class="flagstop">
               <div id="age" class="flag">
                  <h3>Возраст</h3>
                  <p>{flagstop.age}</p>
               </div>
               <div id="experience" class="flag m-flag">
                  <h3>Опыт</h3>
                  <p>{flagstop.experience}</p>
               </div>
               <div id="level" class="flag">
                  <h3>Уровень</h3>
                  <p>{flagstop.level}</p>
               </div>
            </div>

            <div class="spelles">
               {nums.map((num, index) => (
                  <SpellesSlots key={index} level={index + 1} num={num} />
               ))}
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
      </>
   );
}
