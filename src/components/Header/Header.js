import React, { useState } from "react";
import "./Header.css";
import LogOff from "../LogInLogOut/LogOff";
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
                     <Link to="/rules/fight" onClick={toggleMenu}>
                        Боевка
                     </Link>
                     <Link to="/rules/additional" onClick={toggleMenu}>
                        Дополнительные
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
                     <Link to="/lore/religion" onClick={toggleMenu}>
                        Религия
                     </Link>
                     <Link to="/lore/history" onClick={toggleMenu}>
                        История
                     </Link>
                     <Link to="/lore/economy" onClick={toggleMenu}>
                        Экономика
                     </Link>
                     <Link to="/lore/caravan" onClick={toggleMenu}>
                        Политика
                     </Link>
                     <Link to="/lore/culture" onClick={toggleMenu}>
                        Культура
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
                     <Link to="/maps/world" onClick={toggleMenu}>
                        Мира
                     </Link>
                     <Link to="/maps/townes" onClick={toggleMenu}>
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
                     <Link to="/character" onClick={toggleMenu}>
                        {token}
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
