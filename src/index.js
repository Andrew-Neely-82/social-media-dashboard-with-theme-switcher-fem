import { DarkModeContext } from "./context/DarkModeContext";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // This will run only once, when the component is first rendered
  useEffect(() => {
    localStorage.removeItem("darkMode");
  }, []);

  return <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>{children}</DarkModeContext.Provider>;
}

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
