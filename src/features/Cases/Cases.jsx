import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Cases.module.css';

// Импорт изображений кейсов
import case1Img1 from '../../assets/images/photo_1.jpg';
import case1Img2 from '../../assets/images/photo_2.jpg';
import case1Img3 from '../../assets/images/photo_3.jpg';
import case2Img1 from '../../assets/images/photo_4.jpg';
import case2Img2 from '../../assets/images/photo_5.jpg';
import case3Img1 from '../../assets/images/photo_6.jpg';
import case3Img2 from '../../assets/images/photo_7.jpg';

const cases = [
  {
    id: 1,
    title: 'Ремонт квартиры на ул. Ленина',
    description: 'Капитальный ремонт двухкомнатной квартиры с заменой коммуникаций и отделкой под ключ.',
    images: [case1Img1, case1Img2, case1Img3],
  },
  {
    id: 2,
    title: 'Отделка коттеджа в современном стиле',
    description: 'Полная внутренняя отделка коттеджа: стены, потолки, полы, санузлы и кухня.',
    images: [case2Img1, case2Img2],
  },
  {
    id: 3,
    title: 'Ремонт ванной комнаты',
    description: 'Комплексный ремонт санузла с перепланировкой, заменой плитки и сантехники.',
    images: [case3Img1, case3Img2],
  },
];

const Cases = () => {
  return (
    <section className={styles.cases} id="cases">
      <h2>Наши кейсы</h2>
      <p className={styles.subtitle}>Примеры ремонта квартир и домов с возможностью просмотра нескольких изображений</p>
      <div className={styles.casesList}>
        {cases.map((item) => (
          <div className={styles.caseCard} key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={styles.swiper}
            >
              {item.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt={`${item.title} изображение ${idx + 1}`} className={styles.image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cases;
