import React, { useState } from "react";

export default function RegiterForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //   const handleInput2 = (e) => {
  //     const { name, type, value, checked } = e.target;
  //     setForm({
  //       ...form,
  //       [name]: checked,
  //     });
  //   };
  const handleSubmut = (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }
    if (!form.terms) {
      setError("Accept check box");
      return;
    }
    setError("");
    alert("Form data is submitted");
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmut}>
        <h2>Register form data</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="enter name"
          value={form.username}
          onChange={handleInput}
        />
        <input
          type="email"
          name="email"
          placeholder="enter email"
          value={form.email}
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={form.password}
          onChange={handleInput}
        />
        <input
          type="checkbox"
          name="terms"
          checked={form.terms}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
