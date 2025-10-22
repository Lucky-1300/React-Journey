import React, { useState } from "react";

function SignUpForm() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.email && formData.password) {
      setSubmitted(true);
      console.log("User Data:", formData);
      setFormData({ username: "", email: "", password: "" });
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
      {submitted && <p>✅ Sign-up successful!</p>}
    </form>
  );
}

export default SignUpForm;
