import React, { useState, useEffect } from "react";

function ItemList({
   initialItems,
   containerClass = "sheet--container-scroll",
   ulAreaClass = "sheet--ularea-scroll",
}) {
   const [items, setItems] = useState(initialItems || []); // Начальные элементы
   const [newItem, setNewItem] = useState(""); // Для нового элемента

   useEffect(() => {
      setItems(initialItems); // Обновляем элементы при изменении входного списка
   }, [initialItems]);

   const handleAddItem = (event) => {
      if (event.key === "Enter") {
         if (newItem.trim()) {
            setItems((prevItems) => [...prevItems, newItem.trim()]); // Добавляем новый элемент
            setNewItem(""); // Очищаем поле ввода
         }
      }
   };

   const handleRemoveItem = (index) => {
      setItems((prevItems) => prevItems.filter((_, i) => i !== index)); // Удаляем элемент
   };

   return (
      <div className={`sheet--container ${containerClass} sheet--img-bg`}>
         <div className={`sheet--ularea ${ulAreaClass}`}>
            <ul>
               {items.map((item, index) => (
                  <li key={index}>
                     {item}
                     <button onClick={() => handleRemoveItem(index)}>Х</button>
                  </li>
               ))}
            </ul>
            <input
               type="text"
               value={newItem}
               onChange={(e) => setNewItem(e.target.value)}
               onKeyUp={handleAddItem}
            />
         </div>
      </div>
   );
}

export default ItemList;
