import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xzzrybby"); // <-- вставьте ваш Formspree ID

  if (state.succeeded) {
    return (
      <section className={styles.contact} id="contact">
        <h2>Связаться с нами</h2>
        <p>Заполните форму, и мы ответим вам в ближайшее время.</p>
        <div className={styles.success}>Спасибо! Ваша заявка отправлена.</div>
      </section>
    );
  }

  return (
    <section className={styles.contact} id="contact">
      <h2>Связаться с нами</h2>
      <p>Заполните форму, и мы ответим вам в ближайшее время.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          required
          className={styles.input}
        />
        <ValidationError prefix="Имя" field="name" errors={state.errors} />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          className={styles.input}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          required
          className={styles.textarea}
          rows={5}
        />
        <ValidationError prefix="Сообщение" field="message" errors={state.errors} />
        <button type="submit" className={styles.button} disabled={state.submitting}>
          Отправить
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
