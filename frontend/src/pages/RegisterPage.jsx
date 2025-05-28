import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ✅ added

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        username,
        email,
        password,
      });

      if (res.status === 201 || res.status === 200) {
        setSuccess("Registration successful! You can now log in.");
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="off"
        />
        <button type="submit">Register</button>
      </form>

      {/* ✅ Login link */}
      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Already have an account?{" "}
        <Link to="/login" style={{ color: "blueviolet", textDecoration: "none" }}>
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
