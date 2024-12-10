import React, { useState } from "react";
import s from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        {/* Логотип */}
        <div className={s.logo}>MyLogo</div>

        {/* Бургер-меню */}
        <div
          className={`${s.burger} ${isMenuOpen ? s.open : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Меню */}
        <nav className={`${s.menu} ${isMenuOpen ? s.active : ""}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
