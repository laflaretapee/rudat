import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Иван Петров',
    position: 'Генеральный директор ООО "Пример"',
    text: 'Работа с вашей компанией превзошла все ожидания! Профессионально, быстро и качественно.',
  },
  {
    name: 'Мария Смирнова',
    position: 'Маркетолог, ООО "Бизнес"',
    text: 'Отличный сервис и индивидуальный подход. Обязательно обратимся снова!',
  },
  {
    name: 'Алексей Кузнецов',
    position: 'Руководитель проектов, "Старт"',
    text: 'Спасибо за отличную работу и поддержку на всех этапах!',
  },
  {
    name: 'Алексей Кузнецов',
    position: 'Руководитель проектов, "Старт"',
    text: 'Спасибо за отличную работу и поддержку на всех этапах!',
  },
  // Добавьте больше отзывов для карусели
];

const Testimonials = () => (
  <section className={styles.testimonials} id="testimonials">
    <h2>Отзывы клиентов</h2>
    <Swiper
      spaceBetween={32}
      slidesPerView={3}
      slidesPerGroup={1}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      breakpoints={{
        0: { slidesPerView: 1 },
        700: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className={styles.swiper}
    >
      {testimonials.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className={styles.card}>
            <p className={styles.text}>"{item.text}"</p>
            <div className={styles.author}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.position}>{item.position}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Testimonials;
