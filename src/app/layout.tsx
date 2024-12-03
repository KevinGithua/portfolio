"use client";
import { ReactNode, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<string>(""); // Start with an empty string
  const [isThemeLoaded, setIsThemeLoaded] = useState(false); // Track if the theme is loaded

  // Set the theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set the theme based on saved preference or system preference
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const initialTheme = systemPrefersDark ? "dark" : "light";
      setTheme(initialTheme);
    }
    setIsThemeLoaded(true); // Mark theme as loaded
  }, []);

  // Effect to apply theme changes on update
  useEffect(() => {
    if (theme) {
      document.body.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme); // Save user's theme preference
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <html lang="en">
      <head>
        <title>Kevin Githua</title>
      </head>
      <body className={`flex flex-col h-auto ${theme === 'dark' ? 'dark' : ''} ${!isThemeLoaded ? 'hidden' : ''}`}>
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
