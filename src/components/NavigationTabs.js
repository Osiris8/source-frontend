import React, { useState } from "react";
import Follower from "./Follower"; // Importez le composant Follower
import Following from "./Following"; // Importez le composant Following

function NavigationTabs() {
  const [showFollower, setShowFollower] = useState(false);
  const [activeButton, setActiveButton] = useState("abonnes"); // Suivez le bouton actif

  const handleAbonnesClick = () => {
    setShowFollower(true);
    setActiveButton("abonnes");
  };

  const handleAbonnementsClick = () => {
    setShowFollower(false);
    setActiveButton("abonnements");
  };

  return (
    <>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleAbonnesClick}
          className={
            activeButton === "abonnes"
              ? "bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mr-2"
              : "bg-white-500 text-black px-4 py-2 rounded hover:bg-white-600 transition duration-300 border-2 border-black mr-2"
          }
        >
          Abonnés
        </button>
        <button
          onClick={handleAbonnementsClick}
          className={
            activeButton === "abonnements"
              ? "bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mr-2"
              : "bg-white-500 text-black px-4 py-2 rounded hover:bg-white-600 transition duration-300 border-2 border-black mr-2"
          }
        >
          Abonnements
        </button>
      </div>
      {showFollower ? <Follower /> : <Following />}
    </>
  );
}

export default NavigationTabs;
