import { useState, useEffect } from "react";

export default function SpellesSlots({ level, num }) {
   // Инициализируем состояние для чекбоксов
   const [checkedCheckboxes, setCheckedCheckboxes] = useState(
      Array.from({ length: 4 }, (_, index) => index < num)
   );

   const handleCheckboxChange = (index) => {
      // Копируем текущее состояние чекбоксов
      const newCheckedCheckboxes = [...checkedCheckboxes];
      newCheckedCheckboxes[index] = !newCheckedCheckboxes[index];
      // Обновляем состояние
      setCheckedCheckboxes(newCheckedCheckboxes);
   };

   const getCheckboxCount = (level) => {
      if (level === 1 || level === 2) return 4;
      if (level >= 3 && level <= 5) return 3;
      if (level >= 6 && level <= 7) return 2;
      if (level >= 8 && level <= 9) return 1;
      return 0;
   };

   const totalCheckboxes = getCheckboxCount(level);

   useEffect(() => {
      // Обновляем состояние чекбоксов при изменении num
      setCheckedCheckboxes(
         Array.from({ length: totalCheckboxes }, (_, index) => index < num)
      );
   }, [num, totalCheckboxes]);

   // Генерация массива чекбоксов на основе totalCheckboxes
   const checkboxes = Array.from({ length: totalCheckboxes }, (_, index) => (
      <label key={index} className={index < num ? "active" : "inactive"}>
         <input
            type="checkbox"
            disabled={index >= num}
            onChange={() => handleCheckboxChange(index)}
            checked={checkedCheckboxes[index]}
         />
         <span></span>
      </label>
   ));

   return (
      <div className="slots">
         <div className="slot">
            <div className="level">{level}</div>
            <div className="num">{num}</div>
         </div>
         <div className="label">{checkboxes}</div>
      </div>
   );
}
