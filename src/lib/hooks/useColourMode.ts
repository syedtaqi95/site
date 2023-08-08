import { useState, useEffect } from "react";

export default function useColourMode(): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ?? "light"
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
