import { useState } from "react";

// Отдельный компонент для чекбокса с состоянием
function SaveCheckbox({ type }) {
   const [isActive, setIsActive] = useState(false);

   const handleClick = (e) => {
      e.preventDefault(); // Предотвращаем стандартное поведение чекбокса
      setIsActive(!isActive);
   };

   return (
      <label
         className={`saves--${type}-bg sheet--img-bg ${
            isActive ? "active" : ""
         }`}
         onClick={handleClick}
      >
         <span className={`saves--${type}-coin sheet--img-bg`}></span>
      </label>
   );
}

export default function Saves() {
   const deathCoins = Array(3).fill("death");
   const lifeCoins = Array(3).fill("life");

   return (
      <div className="sheet--saves sheet--styled-container">
         <div className="saves--name sheet--img-bg bold name-small">
            Спасброски
         </div>
         <div className="sheet--saves-container">
            {deathCoins.map((type, index) => (
               <SaveCheckbox key={`death-${index}`} type={type} />
            ))}
            {lifeCoins.map((type, index) => (
               <SaveCheckbox key={`life-${index}`} type={type} />
            ))}
         </div>
      </div>
   );
}
