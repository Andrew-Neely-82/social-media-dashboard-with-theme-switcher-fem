import React, { useState, useEffect } from "react";

export const DarkModeContext = React.createContext({
  darkMode: true,
  setDarkMode: () => {},
});

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>{children}</DarkModeContext.Provider>;
};

export function themeFunc(darkMode) {
  return (light, dark) => (darkMode ? `${dark}` : `${light}`);
}

export const lightBg = () => {
  document.body.classList.remove("body-bg-dark");
  document.body.classList.add("body-bg-light");
};

export const darkBg = () => {
  document.body.classList.remove("body-bg-light");
  document.body.classList.add("body-bg-dark");
};