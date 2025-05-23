import React, { useState } from "react";

const Flashcard = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  const containerStyle = {
    perspective: "1000px",
    width: "220px",
    height: "140px",
    margin: "1rem",
  };

  const cardStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    cursor: "pointer",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s",
    transform: flipped ? "rotateY(180deg)" : "none",
  };

  const sideStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
    boxSizing: "border-box",
  };

  const frontStyle = {
    ...sideStyle,
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "white",
    fontWeight: "600",
    fontSize: "1.1rem",
  };

  const backStyle = {
    ...sideStyle,
    background: "linear-gradient(135deg, #fc5c7d, #6a82fb)",
    color: "white",
    transform: "rotateY(180deg)",
    fontSize: "1rem",
    fontWeight: "500",
  };

  return (
    <div style={containerStyle} onClick={() => setFlipped(!flipped)} role="button" tabIndex={0}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") setFlipped(!flipped);
      }} aria-pressed={flipped}>
      <div style={cardStyle}>
        <div style={frontStyle}>
          <div>Q:</div>
          <div>{card.question}</div>
        </div>
        <div style={backStyle}>
          <div><strong>A:</strong></div>
          <div>{card.answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
