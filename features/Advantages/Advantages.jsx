import React from 'react';
import styles from './Advantages.module.css';

const advantages = [
  {
    title: 'Экспертность',
    description: 'Наша команда - это профессионалы с многолетним опытом в отрасли.',
    icon: '💡',
  },
  {
    title: 'Индивидуальный подход',
    description: 'Мы учитываем потребности каждого клиента и предлагаем лучшие решения.',
    icon: '🤝',
  },
  {
    title: 'Гарантия качества',
    description: 'Мы отвечаем за результат и предоставляем гарантию на все услуги.',
    icon: '✅',
  },
];

const Advantages = () => (
  <section className={styles.advantages} id="advantages">
    <h2>Наши преимущества</h2>
    <div className={styles.list}>
      {advantages.map((adv, idx) => (
        <div className={styles.card} key={idx}>
          <div className={styles.icon}>{adv.icon}</div>
          <h3>{adv.title}</h3>
          <p>{adv.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Advantages;
