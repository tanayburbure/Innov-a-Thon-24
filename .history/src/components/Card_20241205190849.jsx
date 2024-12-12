import React, { useState } from "react";

const Card = () => {
  const [hovered, setHovered] = useState(false);

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "#282c34",
    },
    button: {
      position: "relative",
      padding: "10px 25px",
      fontSize: "20px",
      color: "#fff",
      background: hovered ? "#1c86e0" : "#1e90ff", // Change background on hover
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      overflow: "hidden",
      transition: "background 0.3s ease", // Smooth transition for background
    },
    star: {
      position: "absolute",
      width: "30px",
      height: "30px",
      opacity: hovered ? 1 : 0, // Show stars on hover
      transform: hovered ? "scale(1)" : "scale(0)", // Scale stars on hover
      transition: "opacity 0.3s ease, transform 0.3s ease", // Smooth transition for stars
    },
    star1: {
      top: "10px",
      left: "10px",
      animation: "spin 2s linear infinite",
    },
    star2: {
      bottom: "10px",
      right: "10px",
      animation: "scaleUp 2s ease-in-out infinite",
    },
    svg: {
      fill: "#ffd700",
    },
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
    "@keyframes scaleUp": {
      "0%, 100%": { transform: "scale(0.5)" },
      "50%": { transform: "scale(1)" },
    },
  };

  return (
    <div style={styles.container}>
      <button 
        style={styles.button} 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
      >
        Hover Me
        <div style={{ ...styles.star, ...styles.star1 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 784.11 815.53"
            style={styles.svg}
          >
            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
          </svg>
        </div>
        <div style={{ ...styles.star, ...styles.star2 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 784.11 815.53"
            style={styles.svg}
          >
            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Card;
