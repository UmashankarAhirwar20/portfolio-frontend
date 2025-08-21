import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <>
      {/* ✅ Desktop toggle (top-right) */}
      <button
        onClick={toggleTheme}
        className={cn(
          "hidden sm:flex fixed top-3 right-3 z-50 p-2 rounded-full transition-colors duration-300",
          "focus:outline-hidden"
        )}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>

      {/* ✅ Mobile toggle (bottom-right) */}
      <button
        onClick={toggleTheme}
        className={cn(
          "sm:hidden fixed top-5 right-10 z-50 p-3 rounded-full bg-background shadow-lg transition-colors duration-300",
          "focus:outline-hidden"
        )}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
