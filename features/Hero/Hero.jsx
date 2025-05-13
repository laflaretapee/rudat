import React from 'react';
import styles from './Hero.module.css';
import logo from '../../assets/logo.svg';

const Hero = () => (
  <section className={styles.hero}>
    <img src={logo} alt="Логотип компании" className={styles.logo} />
    <h1>Ваша главная идея или слоган</h1>
    <p>Краткое описание или миссия компании</p>
    <a href="#contact" className={styles.ctaButton}>Связаться с нами</a>
  </section>
);

export default Hero;
