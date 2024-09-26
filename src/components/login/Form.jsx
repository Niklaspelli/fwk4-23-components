import React, { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        {fields.includes("username") && (
          <div>
            <label htmlFor="username">Användarnamn: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("email") && (
          <div>
            <label htmlFor="email">Epost: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("password") && (
          <div>
            <label htmlFor="password">Lösenord: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
        )}
        {fields.includes("repeatPassword") && (
          <div>
            <label htmlFor="repeatPassword">Verifiera Lösenord: </label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
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
