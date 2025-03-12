"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Vérifie d'abord si le thème est déjà stocké dans le localStorage
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Applique le thème stocké ou la préférence système
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      root.classList.add("dark");
      setTheme("dark");
    } else {
      root.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-primary text-primary-foreground rounded-border"
    >
      {theme === "light" ? "🌙 Mode Sombre" : "☀️ Mode Clair"}
    </button>
  );
}
