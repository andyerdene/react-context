import React from "react";
import { useTheme } from "../context/ThemeContext";

export function Header() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={"w-full bg-slate-200 text-blue-600 flex justify-between"}>
      <h2>Header</h2>
      <button onClick={changeThemeHandler}>Change Theme</button>
    </div>
  );
}
