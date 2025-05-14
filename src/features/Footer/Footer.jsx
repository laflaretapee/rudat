import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo_white.svg';
import DZ from '../../assets/DZ.png';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.brand}>
        <img src={logo} alt="Логотип" className={styles.logo} />
      </div>
      <nav className={styles.menu}>
        <a href="#about">О компании</a>
        <a href="#advantages">Преимущества</a>
        <a href="#cases">Кейсы</a>
        <a href="#testimonials">Отзывы</a>
        <a href="#contact">Контакты</a>
      </nav>
      <div className={styles.contacts}>
        <a href="tel:+79991234567" className={styles.contactLink}>+7 (937) 328-24-12</a>
        <div className={styles.socials}>
          <a href="https://t.me/RUDATDESIGN" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <svg width="24" height="24" fill="currentColor"><path d="M9.04 16.62l-.39 3.76c.56 0 .8-.24 1.09-.52l2.62-2.49 5.44 3.99c1 .55 1.73.26 1.98-.91l3.6-16.84c.33-1.54-.56-2.14-1.54-1.78L2.16 9.34c-1.5.6-1.48 1.46-.27 1.85l4.09 1.28 9.5-6.01c.45-.29.87-.13.53.18"/></svg>
          </a>
          <a href="https://wa.me/79373282412?text=Здравствуйте!%20Я%20хочу%20узнать%20подробнее%20о%20ваших%20услугах" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
        <div className={styles.devSignature}>
          Разработано&nbsp;
          <a
            href="https://dinarziyazetdinov.ru"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.devLink}
          >
            <img src={DZ} alt="Логотип Dinar Ziyazetdinov" className={styles.devLogo} />
          </a>
        </div>
      </div>
    </div>
    <div className={styles.bottom}>
      <span>© {new Date().getFullYear()} ИП Салихов Ильнур. Все права защищены.</span>
      <a href="/privacy" className={styles.policy}>Политика конфиденциальности</a>
    </div>
  </footer>
);

export default Footer;
