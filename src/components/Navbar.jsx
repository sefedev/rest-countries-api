import { FaRegMoon } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-6 shadow-lg lg:px-12">
      <h1 className="text-xl font-bold">Where in the world?</h1>
      <button className="flex items-center gap-2">
        <FaRegMoon />
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
