import React, { useState } from "react";
import "../CSS/TopBar.css"; // Импортируем CSS-файл с стилями
import Back from "./Back";
import LogOff from "./LogOff";
import { Link } from "react-router-dom";

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
            <Link to="/">
               <img
                  src={`${process.env.PUBLIC_URL}/favicon.ico`}
                  alt="Favicon"
                  height={36}
                  className="logo"
               />
            </Link>
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
                     <Link to="/rules">Основные</Link>
                     <Link to="*">Магия</Link>
                     <Link to="*">Хронология</Link>
                     <Link to="*">D&D</Link>
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
                     <Link to="/lore">Основной</Link>
                     <Link to="/lore/magic">Магия</Link>
                     <Link to="*">Религия</Link>
                     <Link to="/lore/history">История</Link>
                     <Link to="*">Экономика</Link>
                     <Link to="*">Караваны</Link>
                     <Link to="*">Города</Link>
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
                     <Link to="*">Мира</Link>
                     <Link to="*">Городов</Link>
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
                     <Link to="/sheet">Лист Персонажа</Link>
                     <Link to="/spell">Заклинания</Link>
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
