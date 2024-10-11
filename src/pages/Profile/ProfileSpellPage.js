import React, { useState, useEffect } from "react";
import Spell from "../../components/Spells/Spell";
import cards from "../../data/cards.json";
import "../../components/Spells/spellCards.css";
import ToggleSpell from "../../components/Spells/ToggleSpell/ToggleSpell";
import ScrollToTop from "../../components/ScrollToTop";

export default function ProfileSpellPage() {
   const token = localStorage.getItem("token");
   const [userData, setUserData] = useState(null);
   const [filteredData, setFilteredData] = useState([]);
   const [filterPlayers, setFilterPlayers] = useState(token);
   const [filterSelect, setFilterSelect] = useState("all");
   const [filterSchooles, setFilterSchooles] = useState("all");
   const [filterTypes, setFilterTypes] = useState("all");

   const random = {
      title: "Кара",
      school: "goddess",
      type: "attack",
      verbal: 1,
      somatic: 1,
      material: 1,
      description:
         "Лучи светлого порядка проникают в запутанный хаос разума, создавая в нем жесткую симметрию и незыблемую гармонию. Порядок, как кристально чистая и строгая структура, обрушивается на внутренний беспорядок, превращая его в формализованную систему. Каждый луч света, направленный и точный, проникает в сознание, внося в него неотвратимую симметрию, где движение и перемены становятся лишними. В этом свете порядок преломляется в неизменное спокойствие, где гармония приобретает свою высшую форму. Структура становится неподвижной и абсолютной, выражая чрезмерную строгость и вечную тишину. <p>Крик, который слышат все в пределах дистанции, и который причиняет жуткую боль. Цель должна совершить спасбросок <span class='green'>Мудрости</span>. В случае провала она получает урон психической энергией <span class='red'>3к6</span> и должна немедленно реакцией, если она доступна, переместиться прочь от вас настолько далеко, насколько позволяет её скорость.</p><p class='tips'>Существо не будет входить в очевидно опасные места, такие как огонь или яма. В случае успеха цель получает половину урона и не должна отходить.</p><p class='tips'>Глухое существо автоматически преуспевает в спасброске.</p><p class='levelup'>На больших уровнях. Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на <span class='red'>1к6</span> за каждый уровень ячейки выше первого.</p>",
      level: "Субкор (1 уровень)",
      lvl: 1,
      time: "1 действие",
      lenght: "Мгновенная",
      rang: "60 футов",
      player: ["Юджин"],
   };

   useEffect(() => {
      setUserData(cards);
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

   const handleReset = () => {
      setFilterPlayers("Admin");
      setFilterSelect("all");
      setFilterSchooles("all");
      setFilterTypes("all");
   };

   useEffect(() => {
      if (!userData) return;

      let filtered = userData;

      if (token !== "Admin") {
         filtered = filtered.filter((card) => card.player.includes(token));
      } else if (filterPlayers !== "Admin") {
         filtered = filtered.filter((card) =>
            card.player.includes(filterPlayers)
         );
      }

      if (filterSelect !== "all") {
         filtered = filtered.filter(
            (card) => card.lvl.toString() === filterSelect
         );
      }

      if (filterSchooles !== "all") {
         filtered = filtered.filter((card) => card.school === filterSchooles);
      }

      if (filterTypes !== "all") {
         filtered = filtered.filter((card) => card.type === filterTypes);
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
      <div className="spell-gallery">
         <div className="selector">
            {token === "Admin" && (
               <select
                  id="filterPlayers"
                  onChange={handlePlayerChange}
                  value={filterPlayers}
               >
                  <option value="Admin">All</option>
                  <option value="Олёй">Олёй</option>
                  <option value="Юджин">Юджин</option>
                  <option value="Талико">Талико</option>
                  <option value="Евлебия">Евлебия</option>
               </select>
            )}
            <select
               id="filterSelect"
               onChange={handleSelectChange}
               value={filterSelect}
            >
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

            {(token === "Admin" || token === "Олёй") && (
               <select
                  id="filterSchooles"
                  onChange={handleSchoolesChange}
                  value={filterSchooles}
               >
                  <option value="all">All</option>
                  <option value="white">Белая</option>
                  {token === "Admin" && (
                     <>
                        <option value="black">Черная</option>
                        <option value="goddess">Божественная</option>
                     </>
                  )}

                  <option value="nature">Природная</option>
               </select>
            )}
            <select
               id="filterTypes"
               onChange={handleTypesChange}
               value={filterTypes}
            >
               <option value="all">All</option>
               <option value="attack">Атака</option>
               <option value="defense">Защита</option>
               <option value="inspiration">Воодущевление</option>
               <option value="healing">Лечение</option>
               <option value="other">Прочее</option>
            </select>

            <button onClick={handleReset} className="btn">
               <h2>Reset</h2>
            </button>
         </div>

         <div className="container-spell">
            {token === "Юджин" || token === "Admin" ? (
               <ToggleSpell props={random} />
            ) : (
               ""
            )}
            {filteredData.length > 0 ? (
               filteredData.map((card, index) => (
                  <Spell key={index} props={card} />
               ))
            ) : (
               <div>No cards match the selected filters</div>
            )}
         </div>
         <ScrollToTop />
      </div>
   );
}
