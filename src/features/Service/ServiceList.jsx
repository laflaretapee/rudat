import React from 'react';
import styles from './ServiceList.module.css';

const services = [
  {
    icon: 'https://img.icons8.com/fluency/64/brick-wall.png',
    price: 'от 130 руб./кв. м',
    title: 'Шпатлевка стен, потолка',
    description: 'Черновое и финишное шпатлевание, грунтование под покраску или обои.',
  },
  {
    icon: 'https://img.icons8.com/fluency/64/trowel.png',
    price: 'от 250 руб./кв. м',
    title: 'Штукатурные работы',
    description: 'Выравнивание стен и потолков гипсовыми или цементными смесями.',
  },
  {
    icon: 'https://img.icons8.com/fluency/64/light-on.png',
    price: 'от 60 руб./изд.',
    title: 'Электромонтаж',
    description: 'Монтаж/замена проводки, установка розеток, выключателей, подключение приборов.',
  },
  {
    icon: 'https://img.icons8.com/fluency/64/paint-roller.png',
    price: 'от 100 руб./кв. м',
    title: 'Малярные работы',
    description: 'Подготовка и покраска стен, потолков, декоративные покрытия.',
  },
  {
    icon: 'https://img.icons8.com/fluency/64/tiles.png',
    price: 'от 500 руб./кв. м',
    title: 'Укладка плитки',
    description: 'Плиточные работы в санузлах, кухнях, коридорах, декоративная плитка.',
  },
  {
    icon: 'https://img.icons8.com/fluency/64/water-tap.png',
    price: 'от 500 руб.',
    title: 'Сантехнические работы',
    description: 'Монтаж/замена труб, установка сантехники, подключение оборудования.',
  },
];

const Services = () => (
  <section className={styles.servicesSection}>
    <h2 className={styles.heading}>Виды работ и цены</h2>
    <div className={styles.cards}>
      {services.map((service, idx) => (
        <div className={styles.card} key={idx}>
          <img src={service.icon} alt="" className={styles.icon} />
          <div className={styles.price}>{service.price}</div>
          <div className={styles.title}>{service.title}</div>
          <div className={styles.desc}>{service.description}</div>
          {/* <button className={styles.cta}>Подробнее</button> */}
        </div>
      ))}
    </div>
    <div className={styles.bottomCta}>
      <p>Не нашли нужную услугу? Свяжитесь с нами для индивидуальной консультации.</p>
      <a
        href="https://wa.me/79273215687?text=Здравствуйте!%20Я%20хочу%20получить%20индивидуальную%20консультацию."
        className={styles.consultBtn}
        target="_blank"
        rel="noopener noreferrer"
      >
        Получить консультацию
      </a>
    </div>
  </section>
);

export default Services;
