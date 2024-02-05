import { DarkModeContext, themeFunc } from "../../context/DarkModeContext.js";
import React, { useContext } from "react";
import { BigCard } from "../export.js";
import { props } from "./data.js";

const Top = () => {
  const { darkMode } = useContext(DarkModeContext);
  const theme = themeFunc(darkMode);
  const themeClass = theme("dark", "light");

  return (
    <div className="top">
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
