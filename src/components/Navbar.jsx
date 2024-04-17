import { useState } from "react";
import { FaRegMoon } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  const [isDark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!isDark);
  };
  return (
    <nav
      className={`flex items-center justify-between px-4 py-6 shadow-lg lg:px-12 dark:bg-elDark dark:text-white `}
    >
      <h1 className="text-xl font-bold">Where in the world?</h1>
      <button className="flex items-center gap-2" onClick={toggleTheme}>
        {isDark ? (
          <CiLight className="dark:text-white" />
        ) : (
          <FaRegMoon className="dark:text-white" />
        )}
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
