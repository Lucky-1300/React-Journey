import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Home", active: true },
    { name: "About", active: false },
    { name: "Services", active: false },
    { name: "Contact", active: false },
  ];

  return (
    <nav className="
      fixed top-0 left-0 w-full z-50 
      bg-white/60 dark:bg-gray-900/60 
      backdrop-blur-md shadow-sm
    ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          MyLogo
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-lg">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition 
              ${link.active ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300"}`}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-4">

          {/* DARK MODE TOGGLE */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* MOBILE ICON */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            onClick={toggleMenu}
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 
          ${isOpen ? "max-h-60" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col px-6 pb-4 gap-4 text-lg bg-white dark:bg-gray-900">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition 
              ${link.active ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-gray-700 dark:text-gray-300"}`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

