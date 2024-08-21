import React, { useState, useEffect } from "react";
import Back from "../components/Back";
import Spell from "../components/Spell";
import cards from "../data/cards.json";
import "../CSS/spellCards.css";

export default function SpellPage() {
   const token = localStorage.getItem("token");
   const [userData, setUserData] = useState(null);
   const [filteredData, setFilteredData] = useState([]);
   const [filterPlayers, setFilterPlayers] = useState(token);
   const [filterSelect, setFilterSelect] = useState("all");
   const [filterSchooles, setFilterSchooles] = useState("all");
   const [filterTypes, setFilterTypes] = useState("all");

   useEffect(() => {
      setUserData(cards);
      setFilteredData(cards);
   }, []);

   const handlePlayerChange = (e) => {
      setFilterPlayers(e.target.value);
   };

   const handleSelectChange = (e) => {
      setFilterSelect(e.target.value);
   };

   const handleSchoolesChange = (e) => {
      setFilterSchooles(e.target.value);
   };

   const handleTypesChange = (e) => {
      setFilterTypes(e.target.value);
   };

   useEffect(() => {
      if (!userData) return;

      let filtered = userData;

      if (token !== "all") {
         filtered = filtered.filter((card) => card.player.includes(token));
      } else if (filterPlayers !== "all") {
         filtered = filtered.filter((card) =>
            card.player.includes(filterPlayers)
         );
      }

      if (filterSelect !== "all") {
         filtered = filtered.filter((card) => card.typeno === filterSelect);
      }

      if (filterSchooles !== "all") {
         filtered = filtered.filter((card) => card.school === filterSchooles);
      }

      if (filterTypes !== "all") {
         filtered = filtered.filter((card) => card.aType === filterTypes);
      }

      setFilteredData(filtered);
   }, [
      filterPlayers,
      filterSelect,
      filterSchooles,
      filterTypes,
      userData,
      token,
   ]);

   if (!userData) {
      return <div>Loading...</div>;
   }

   return (
      <>
         <div className="selector">
            {/* Фильтр игроков отображается только если token равен "all" */}
            {token === "all" && (
               <select id="filterPlayers" onChange={handlePlayerChange}>
                  <option value="all">All</option>
                  <option value="Олёй">Олёй</option>
                  <option value="Юджин">Юджин</option>
                  <option value="Талико">Талико</option>
               </select>
            )}

            <select id="filterSelect" onChange={handleSelectChange}>
               <option value="all">All</option>
               <option value="0">Компакт (Заговор)</option>
               <option value="1">Субкор (1 уровень)</option>
               <option value="2">Майнтайн (2 уровень)</option>
               <option value="3">Сантай (3 уровень)</option>
               <option value="4">Субджай (4 уровень)</option>
               <option value="5">Джай (5 уровень)</option>
               <option value="6">Браджай (6 уровень)</option>
               <option value="7">Мега (7 уровень)</option>
               <option value="8">МегаТрон (8 уровень)</option>
               <option value="9">Нова (9 уровень)</option>
               <option value="*">СуперНова (* уровень)</option>
            </select>
            {/* Фильтр школ также отображается только если token равен "all" */}
            {(token === "all" || token === "Олёй") && (
               <select id="filterSchooles" onChange={handleSchoolesChange}>
                  <option value="all">All</option>
                  <option value="wight">Белая</option>
                  {token === "all" && (
                     <>
                        <option value="black">Черная</option>
                        <option value="goddess">Божественная</option>
                     </>
                  )}
                  <option value="nature">Природная</option>
               </select>
            )}

            <select id="filterTypes" onChange={handleTypesChange}>
               <option value="all">All</option>
               <option value="attack">Атака</option>
               <option value="defense">Защита</option>
               <option value="inspiration">Воодущевление</option>
               <option value="other">Прочее</option>
            </select>

            <Back />
         </div>

         <div className="container">
            {filteredData.length > 0 ? (
               filteredData.map((card, index) => (
                  <Spell key={index} props={card} />
               ))
            ) : (
               <div>No cards match the selected filters</div>
            )}
         </div>
      </>
   );
}
