import React, { useState } from "react";
import styles from "./ContactComponent.module.css";

export default function ContactComponent() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:9000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setForm({ name: "", email: "", message: "" });
      alert("Mensaje enviado con éxito");
    } catch (error) {
      alert("Hubo un error al enviar el mensaje");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <textarea
            className={styles.messageInput}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Mensaje"
            required
          />

          <div className={styles.checkboxContainer}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={(e) => setForm({ ...form, terms: e.target.checked })}
              required
            />
            <label htmlFor="terms" className={styles.checkboxLabel}>
              Acepto los términos y condiciones
            </label>
          </div>

          <button className={styles.submitButton} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
