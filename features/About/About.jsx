import React from 'react';
import styles from './About.module.css';

const About = () => (
  <section className={styles.about} id="about">
    <h2>О компании</h2>
    <p>
      Мы - команда профессионалов, объединённых общей целью: создавать качественные решения для наших клиентов.
      Наш опыт, инновационный подход и внимание к деталям позволяют нам достигать выдающихся результатов.
    </p>
    <ul className={styles.list}>
      <li>Более 10 лет на рынке</li>
      <li>Сотни реализованных проектов</li>
      <li>Индивидуальный подход к каждому клиенту</li>
    </ul>
  </section>
);

export default About;
