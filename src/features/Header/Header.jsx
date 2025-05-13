import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logoLink}>
          <img src={logo} alt="Логотип" className={styles.logo} />
        </a>
        <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}> 
          <a href="#about" onClick={() => setIsOpen(false)}>О компании</a>
          <a href="#advantages" onClick={() => setIsOpen(false)}>Преимущества</a>
          <a href="#cases" onClick={() => setIsOpen(false)}>Кейсы</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Отзывы</a>
          <a href="#contact" className={styles.cta} onClick={() => setIsOpen(false)}>Связаться</a>
        </nav>
        <button className={styles.burger} onClick={toggleMenu} aria-label="Меню">
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
