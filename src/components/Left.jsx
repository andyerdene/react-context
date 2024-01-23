import React from "react";
import { useTheme } from "@/context/ThemeContext";

export function Left() {
  const { theme } = useTheme();
  const divClassName =
    theme == "light" ? "w-1/4 bg-slate-700" : "w-1/4 bg-slate-100";
  const pClassName = theme == "light" ? "text-white" : "text-black";

  return (
    <div className={divClassName}>
      <p className={pClassName}>Left</p>
    </div>
  );
}
