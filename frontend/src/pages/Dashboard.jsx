/*import React, { useEffect, useState } from "react";
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
*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import Flashcard from "../components/Flashcard";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      {/* Logout button */}
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "8px 16px",
          cursor: "pointer",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>

      <h2>Welcome to Your Dashboard</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "50px" }}>
        {flashcards.map((card) => (
          <Flashcard key={card._id} card={card} />
        ))}
        {/* Add Flashcard Button - bottom center */}
<Link
  to="/create"
  style={{
    position: "fixed",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "12px 24px",
    backgroundColor: "#4CAF50",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
  }}
>
  + Add Flashcard
</Link>

      </div>
    </div>
  );
};

export default Dashboard;
