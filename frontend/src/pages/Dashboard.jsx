import React, { useEffect, useState } from "react";
import axios from "axios";
import Flashcard from "../components/Flashcard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/flashcards", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFlashcards(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch flashcards.");
      }
    };

    fetchFlashcards();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      {error && <p className="error-message">{error}</p>}

      <div className="flashcard-list">
        {flashcards.map((card) => (
          <Flashcard key={card._id} card={card} />
        ))}

        <Link to="/create" className="add-flashcard-link">
          + Add Flashcard
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
