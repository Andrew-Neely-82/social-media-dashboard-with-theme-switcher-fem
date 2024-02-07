import { DarkModeContext, themeFunc } from "../../context/DarkModeContext.js";
import { followerCount, props } from "./data.js";
import React, { useContext } from "react";
import IOSSwitch from "./IOSSwitch.jsx";
import { BigCard } from "../export.js";

const Top = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const theme = themeFunc(darkMode);
  const themeClass = theme("dark", "light");
  const textColor = theme("light-text", "dark-text");

  const handleDarkModeToggle = () => setDarkMode((prev) => !prev);

  return (
    <div className="top">
      <div className="top-wrapper">
        <div className={`top-wrapper-container ${textColor}`}>
          <h1 className="dashboard">Social Media Dashboard</h1>
          <span className="follower-count">Total followers: {followerCount.count}</span>
        </div>
        <div className="toggle-container">
          <IOSSwitch onChange={handleDarkModeToggle} />
        </div>
      </div>
      <div className="top-socials-container">
        {props.map((prop, key) => {
          return (
            <React.Fragment key={key}>
              <BigCard className={themeClass} {...prop} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default Top;
