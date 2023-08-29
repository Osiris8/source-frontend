import React from "react";
import { Link } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Logout";

function Navbar() {
  const uid = React.useContext(UidContext);
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
          alt="Logo"
          className="h-8 w-8 mr-4"
        />
        <Link to="/" className="text-white font-bold text-lg">
          Mon Application
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white">
          Accueil
        </Link>
        <Link to="/about" className="text-white">
          À propos
        </Link>
        {uid ? (
          <Link to="/logout" className="text-white">
            <Logout />
          </Link>
        ) : (
          <Link to="/login" className="text-white">
            Se connecter
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;