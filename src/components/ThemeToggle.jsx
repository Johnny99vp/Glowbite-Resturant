import { useEffect, useState } from "react";

const KEY = "glowbite-theme";

function getInitialTheme() {
  const set = document.documentElement.getAttribute("data-theme");
  if (set) return set;
  try {
    const saved = localStorage.getItem(KEY);
    if (saved) return saved;
  } catch {
    // storage unavailable
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const next = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    setTheme(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // the theme still changes for this session
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="size-10 cursor-pointer rounded-full border-[1.5px] border-line bg-surface text-lg leading-none text-ink hover:border-accent"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}

export default ThemeToggle;