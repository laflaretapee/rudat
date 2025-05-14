import React from 'react';
import styles from './Hero.module.css';

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <h1>Ваш идеальный ремонт - легко и без забот</h1>
      <p>Комплексный ремонт квартир и домов в Уфе: проектирование, отделка, инженерные работы. Работаем точно в срок и по договору.</p>

      <a href="#contact" className={styles.ctaButton}>Связаться с нами</a>
    </div>
  </section>
);

export default Hero;
