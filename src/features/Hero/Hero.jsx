import React from 'react';
import styles from './Hero.module.css';

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <h1>Ваша главная идея или слоган</h1>
      <p>Краткое описание или миссия компании</p>
      <a href="#contact" className={styles.ctaButton}>Связаться с нами</a>
    </div>
  </section>
);

export default Hero;
