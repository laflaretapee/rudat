import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.brand}>
        <img src={logo} alt="Логотип" className={styles.logo} />
        <span className={styles.company}>ООО "Ваша Компания"</span>
      </div>
      <nav className={styles.menu}>
        <a href="#about">О компании</a>
        <a href="#advantages">Преимущества</a>
        <a href="#cases">Кейсы</a>
        <a href="#testimonials">Отзывы</a>
        <a href="#contact">Контакты</a>
      </nav>
      <div className={styles.contacts}>
        <a href="tel:+79991234567" className={styles.contactLink}>+7 (999) 123-45-67</a>
        <a href="mailto:info@company.ru" className={styles.contactLink}>info@company.ru</a>
        <div className={styles.socials}>
          <a href="https://t.me/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <svg width="24" height="24" fill="currentColor"><path d="M9.04 16.62l-.39 3.76c.56 0 .8-.24 1.09-.52l2.62-2.49 5.44 3.99c1 .55 1.73.26 1.98-.91l3.6-16.84c.33-1.54-.56-2.14-1.54-1.78L2.16 9.34c-1.5.6-1.48 1.46-.27 1.85l4.09 1.28 9.5-6.01c.45-.29.87-.13.53.18"/></svg>
          </a>
          <a href="https://vk.com/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="VK">
            <svg width="24" height="24" fill="currentColor"><path d="M12.99 17.5h1.61c.44 0 .55-.31.38-.65l-.38-.65c-.17-.34-.25-.55.03-.89l2.36-2.75c.29-.34.14-.65-.29-.65h-1.61c-.44 0-.67.23-.82.51l-.38.65c-.17.34-.25.55-.03.89l2.36 2.75c.29.34.14.65-.29.65z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div className={styles.bottom}>
      <span>© {new Date().getFullYear()} ООО "Ваша Компания". Все права защищены.</span>
      <a href="/privacy" className={styles.policy}>Политика конфиденциальности</a>
    </div>
  </footer>
);

export default Footer;
