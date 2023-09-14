import { useState, useEffect } from "react";

export default function useColourMode(): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] {
  const [theme, setTheme] = useState<string>(
    typeof localStorage !== "undefined"
      ? localStorage.getItem("theme") ?? "light"
      : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
