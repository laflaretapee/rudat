import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Здесь можно добавить отправку данных на сервер
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.contact} id="contact">
      <h2>Связаться с нами</h2>
      <p>Заполните форму, и мы ответим вам в ближайшее время.</p>
      {submitted ? (
        <div className={styles.success}>Спасибо! Ваша заявка отправлена.</div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={form.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            value={form.message}
            onChange={handleChange}
            required
            className={styles.textarea}
            rows={5}
          />
          <button type="submit" className={styles.button}>
            Отправить
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
