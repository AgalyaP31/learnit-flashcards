import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateFlashcard = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/flashcards",
        { question, answer },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.status === 201) {
        navigate("/dashboard");
      } else {
        setError("Could not create flashcard");
      }
    } catch (err) {
      console.error(err);
      setError("Error creating flashcard");
    }
  };

  return (
    <div className="container">
      <h2>Create Flashcard</h2>
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
          rows={4}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateFlashcard;
