import { DarkModeContext, darkBg, lightBg, themeFunc } from "./context/DarkModeContext";
import { useContext } from "react";
import "./styling/App.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const theme = themeFunc(darkMode);
  const themeClass = theme("dark", "light");

  // * body theme
  darkMode ? lightBg() : darkBg();

  return (
    <div className={`App App-${themeClass}-bg`}>
      <div className={`bg-top-${themeClass}`} />
    </div>
  );
}

export default App;
