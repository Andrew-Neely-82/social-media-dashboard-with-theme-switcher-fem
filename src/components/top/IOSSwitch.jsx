import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  margin: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    color: "#1f212e",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        background: theme.palette.mode === "light" ? "hsl(230, 22%, 74%)" : "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      outline: "2px solid #666",
      color: theme.palette.mode === "light" ? "red" : "red",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {},
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: "10rem",
    background:
      theme.palette.mode === "light"
        ? //
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
        : //
          "hsl(230, 22%, 74%)",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default IOSSwitch;
