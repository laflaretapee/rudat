import React from 'react';
import styles from './Testimonials.module.css';
// Если есть фото клиентов, импортируйте их из assets/images

const testimonials = [
  {
    name: 'Иван Петров',
    position: 'Генеральный директор ООО "Пример"',
    text: 'Работа с вашей компанией превзошла все ожидания! Профессионально, быстро и качественно.',
    // photo: require('../../assets/images/ivan.jpg'),
  },
  {
    name: 'Мария Смирнова',
    position: 'Маркетолог, ООО "Бизнес"',
    text: 'Отличный сервис и индивидуальный подход. Обязательно обратимся снова!',
    // photo: require('../../assets/images/maria.jpg'),
  },
  {
    name: 'Алексей Кузнецов',
    position: 'Руководитель проектов, "Старт"',
    text: 'Спасибо за отличную работу и поддержку на всех этапах!',
    // photo: require('../../assets/images/alexey.jpg'),
  },
];

const Testimonials = () => (
  <section className={styles.testimonials} id="testimonials">
    <h2>Отзывы клиентов</h2>
    <div className={styles.list}>
      {testimonials.map((item, idx) => (
        <div className={styles.card} key={idx}>
          {/* Если есть фото, раскомментируйте строку ниже */}
          {/* <img src={item.photo} alt={item.name} className={styles.photo} /> */}
          <p className={styles.text}>"{item.text}"</p>
          <div className={styles.author}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.position}>{item.position}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
