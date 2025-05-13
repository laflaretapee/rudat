import React from 'react';
import styles from './Cases.module.css';
// Импортируйте изображения кейсов, если есть
// import case1 from '../../assets/images/case1.jpg';

const cases = [
  {
    title: 'Проект для компании А',
    description: 'Разработка корпоративного сайта и автоматизация бизнес-процессов.',
    // image: case1,
  },
  {
    title: 'Мобильное приложение для B',
    description: 'Создание удобного приложения для онлайн-заказов.',
    // image: case2,
  },
  {
    title: 'Брендинг для C',
    description: 'Комплексное создание фирменного стиля и маркетинговых материалов.',
    // image: case3,
  },
];

const Cases = () => (
  <section className={styles.cases} id="cases">
    <h2>Наши кейсы</h2>
    <div className={styles.list}>
      {cases.map((item, idx) => (
        <div className={styles.card} key={idx}>
          {/* Если есть изображения, раскомментируйте строку ниже */}
          {/* <img src={item.image} alt={item.title} className={styles.image} /> */}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Cases;
