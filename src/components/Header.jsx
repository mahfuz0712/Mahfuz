import  { useState } from "react";
import { FaBook, FaGithub } from "react-icons/fa";
import logo from "../assets/mahfuz-logo.png";
import { Link } from 'react-router-dom';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900  mb-2">
      <div>
        <Link className="flex items-center" to="/">
          <h1 className="text-xl text-green-500 font-bold">Mahfuz</h1>
          <img src={logo} alt="Mahfuz JS Logo" className="w-8 h-auto mr-2" />
        </Link>
      </div>
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex gap-4 absolute md:static right-4 top-16 bg-gray-800 md:bg-transparent p-4 md:p-0 rounded-md md:rounded-none`}
      >
        <Link
          to="/docs"
          className="flex items-center text-green-500 hover:text-green-400"
        >
          <FaBook className="mr-1" /> Docs
        </Link>
        <a
          href="https://github.com/mahfuz0712/Mahfuz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-500 hover:text-green-400"
        >
          <FaGithub className="mr-1" /> GitHub
        </a>
      </nav>
      <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1">
        <div className="w-6 h-0.5 bg-green-500"></div>
        <div className="w-6 h-0.5 bg-green-500"></div>
        <div className="w-6 h-0.5 bg-green-500"></div>
      </button>
    </header>
  );
};

export default Header;
