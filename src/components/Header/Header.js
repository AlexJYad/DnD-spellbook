import React, { useState } from "react";
import "./Header.css";
import LogOff from "../LogOff";
import { Link } from "react-router-dom";

const Header = React.memo(() => {
   const token = localStorage.getItem("token");
   const [menuOpen, setMenuOpen] = useState(false);
   const [openDropdown, setOpenDropdown] = useState(null);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   const closeMenu = () => {
      setMenuOpen(false);
   };

   const toggleDropdown = (index) => {
      if (openDropdown === index) {
         setOpenDropdown(null);
      } else {
         setOpenDropdown(index);
      }
   };

   return (
      <div className="header__container">
         <div className="header__content">
            <Link to="/" onClick={closeMenu}>
               <img
                  src={`${process.env.PUBLIC_URL}/favicon.ico`}
                  alt="Favicon"
                  className="btn header__logo"
               />
            </Link>
            <button
               className={`header__hamburger ${menuOpen ? "active" : ""} btn`}
               onClick={toggleMenu}
            >
               <span className="header__hamburger-line"></span>
               <span className="header__hamburger-line"></span>
               <span className="header__hamburger-line"></span>
            </button>

            <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
               <div className="header__nav__dropdown">
                  <button
                     className={`btn header__nav__btn ${
                        openDropdown === 1 ? "active" : ""
                     }`}
                     onClick={() => toggleDropdown(1)}
                  >
                     <h2>Правила</h2>
                  </button>
                  <div
                     className={`header__nav__btn__drop ${
                        openDropdown === 1 ? "active" : ""
                     }`}
                  >
                     <Link to="/rules" onClick={toggleMenu}>
                        Основные
                     </Link>
                     <Link to="*" onClick={toggleMenu}>
                        Магия
                     </Link>
                     <Link to="*" onClick={toggleMenu}>
                        Хронология
                     </Link>
                     <Link to="*" onClick={toggleMenu}>
                        D&D
                     </Link>
                  </div>
               </div>
               <div className="header__nav__dropdown">
                  <button
                     className={`btn header__nav__btn ${
                        openDropdown === 2 ? "active" : ""
                     }`}
                     onClick={() => toggleDropdown(2)}
                  >
                     <h2>Лор</h2>
                  </button>
                  <div
                     className={`header__nav__btn__drop ${
                        openDropdown === 2 ? "active" : ""
                     }`}
                  >
                     <Link to="/lore" onClick={toggleMenu}>
                        Основной
                     </Link>
                     <Link to="/lore/magic" onClick={toggleMenu}>
                        Магия
                     </Link>
                     <Link to="*" onClick={toggleMenu}>
                        Религия
                     </Link>
                     <Link to="/lore/history" onClick={toggleMenu}>
                        История
                     </Link>
                     <Link to="*" onClick={toggleMenu}>
                        Экономика
                     </Link>
                     <Link to="*" onClick={toggleMenu}>
                        Караваны
                     </Link>
                     <Link to="*" onClick={toggleMenu}>
                        Города
                     </Link>
                  </div>
               </div>
               <div className="header__nav__dropdown">
                  <button
                     className={`btn header__nav__btn ${
                        openDropdown === 3 ? "active" : ""
                     }`}
                     onClick={() => toggleDropdown(3)}
                  >
                     <h2>Карта</h2>
                  </button>
                  <div
                     className={`header__nav__btn__drop ${
                        openDropdown === 3 ? "active" : ""
                     }`}
                  >
                     <Link to="*" onClick={toggleMenu}>
                        Мира
                     </Link>
                     <Link to="*" onClick={toggleMenu}>
                        Городов
                     </Link>
                  </div>
               </div>
               <div className="header__nav__dropdown">
                  <button
                     className={`btn header__nav__btn ${
                        openDropdown === 4 ? "active" : ""
                     }`}
                     onClick={() => toggleDropdown(4)}
                  >
                     <h2>{token}</h2>
                  </button>
                  <div
                     className={`header__nav__btn__drop ${
                        openDropdown === 4 ? "active" : ""
                     }`}
                  >
                     <Link to="/sheet" onClick={toggleMenu}>
                        Лист Персонажа
                     </Link>
                     <Link to="/spell" onClick={toggleMenu}>
                        Заклинания
                     </Link>
                  </div>
               </div>
               <LogOff className="btn header__nav__btn" />
            </nav>
         </div>
      </div>
   );
});

export default Header;
