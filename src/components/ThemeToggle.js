import { useState } from "react";

const ThemeToggle = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        height: "100vh",
        padding: "20px",
        transition: "all 0.3s",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
      {children}
    </div>
  );
};

export default ThemeToggle;
