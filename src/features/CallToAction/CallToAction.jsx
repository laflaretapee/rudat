import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => (
  <section className={styles.cta} id="cta">
    <h2>Готовы начать сотрудничество?</h2>
    <p>
      Оставьте заявку прямо сейчас - и мы свяжемся с вами в ближайшее время!
    </p>
    <a href="#contact" className={styles.ctaButton}>
      Оставить заявку
    </a>
  </section>
);

export default CallToAction;
