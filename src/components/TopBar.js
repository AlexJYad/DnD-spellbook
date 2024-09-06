import React, { useState } from "react";
import "../CSS/TopBar.css"; // Импортируем CSS-файл с стилями
import Back from "./Back";
import LogOff from "./LogOff";

const TopBar = React.memo(() => {
   const token = localStorage.getItem("token");
   const [menuOpen, setMenuOpen] = useState(false);
   const [openDropdown, setOpenDropdown] = useState(null);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   const toggleDropdown = (index) => {
      if (openDropdown === index) {
         setOpenDropdown(null); // Закрыть если уже открыт
      } else {
         setOpenDropdown(index); // Открыть новый
      }
   };

   return (
      <div className="topbar-container">
         <div className="topbar-content">
            <a href="/">
               <img
                  src={`${process.env.PUBLIC_URL}/favicon.ico`}
                  alt="Favicon"
                  height={36}
                  className="logo"
               />
            </a>
            <div
               className={`hamburger ${menuOpen ? "active" : ""}`}
               onClick={toggleMenu}
            >
               <div></div>
               <div></div>
               <div></div>
            </div>
            <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
               <div className="dropdown">
                  <button className="dropbtn" onClick={() => toggleDropdown(1)}>
                     <h2>Правила</h2>
                  </button>
                  <div
                     className={`dropdown-content ${
                        openDropdown === 1 ? "active" : ""
                     }`}
                  >
                     <a href="/rules">Основные</a>
                     <a href="*">Магия</a>
                     <a href="*">Хронология</a>
                     <a href="*">D&D</a>
                  </div>
               </div>
               <div className="dropdown">
                  <button className="dropbtn" onClick={() => toggleDropdown(2)}>
                     <h2>Лор</h2>
                  </button>
                  <div
                     className={`dropdown-content ${
                        openDropdown === 2 ? "active" : ""
                     }`}
                  >
                     <a href="*">Основной</a>
                     <a href="*">Магия</a>
                     <a href="*">Религия</a>
                     <a href="*">Хронология</a>
                     <a href="*">Экономика</a>
                     <a href="*">Караваны</a>
                     <a href="*">Города</a>
                  </div>
               </div>
               <div className="dropdown">
                  <button className="dropbtn" onClick={() => toggleDropdown(3)}>
                     <h2>Карта</h2>
                  </button>
                  <div
                     className={`dropdown-content ${
                        openDropdown === 3 ? "active" : ""
                     }`}
                  >
                     <a href="*">Мира</a>
                     <a href="*">Городов</a>
                  </div>
               </div>
               <div className="dropdown">
                  <button className="dropbtn" onClick={() => toggleDropdown(4)}>
                     <h2>{token}</h2>
                  </button>
                  <div
                     className={`dropdown-content ${
                        openDropdown === 4 ? "active" : ""
                     }`}
                  >
                     <a href="/sheet">Лист Пресонажа</a>
                     <a href="/spell">Заклинания</a>
                  </div>
               </div>
               <LogOff className="btn" />
               <Back className="btn" />
            </nav>
         </div>
      </div>
   );
});

export default TopBar;
