"use client";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <html lang="en">
      <body className="transition-colors duration-500">

        {/* Toggle Button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fixed top-5 right-5 p-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 duration-300"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>

        {children}
      </body>
    </html>
  );
}
