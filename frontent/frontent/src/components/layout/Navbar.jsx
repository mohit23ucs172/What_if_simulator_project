import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          WhatIfSim
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-indigo-500">Home</Link>
          <Link to="/simulation" className="hover:text-indigo-500">Simulation</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
