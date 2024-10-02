import React, { useState } from "react";
import styles from "../../login/Login.module.css";

const Form = ({ fields = [], onSubmit }) => {
  const [formState, setFormState] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formState);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        {fields.includes("username") && (
          <div className={styles.inputs}>
            <label htmlFor="username">Användarnamn: </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Användarnamn"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("email") && (
          <div className={styles.inputs}>
            <label htmlFor="email">Epost: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Epost"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("password") && (
          <div className={styles.inputs}>
            <label htmlFor="password">Lösenord: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Lösenord"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("repeatPassword") && (
          <div className={styles.inputs}>
            <label htmlFor="repeatPassword">Verifiera Lösenord: </label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              placeholder="Verifiera Lösenord"
              value={formState.repeatPassword}
              onChange={handleChange}
            />
          </div>
        )}
      </form>
    </>
  );
};

export default Form;
