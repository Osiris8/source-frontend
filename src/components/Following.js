///Abonnées
import React, { useState } from "react";
import { useSelector } from "react-redux";
function Following() {
  const [showUnfollowModal, setShowUnfollowModal] = useState(false);

  // Fonction pour afficher ou masquer le modal
  const toggleUnfollowModal = () => {
    setShowUnfollowModal(!showUnfollowModal);
  };
  const usersProfiles = useSelector((state) => state.users.allUsers);
  const userProfile = useSelector((state) => state.user.userProfile);

  // Filtrer les utilisateurs que l'utilisateur connecté suit
  const followingUsers = usersProfiles.filter((profile) =>
    userProfile.following.includes(profile._id)
  );
  return (
    <div className="bg-white p-4 flex items-center justify-between  rounded-lg m-5">
      <div className="flex flex-col items-center">
        {followingUsers.map((profile) => (
          <div key={profile._id} className="mb-4">
            <div className="flex items-center justify-between">
              <img
                src={profile.image.replace("/frontend/public", "")}
                alt={profile.firstname}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold">
                  {profile.firstname} {profile.lastname}
                </h2>
                <p className="text-gray-600">{profile.biographie}</p>
              </div>
              <button
                onClick={toggleUnfollowModal}
                className="bg-white-500 text-black px-4 py-2 rounded hover:bg-cyan-600 hover:text-white hover:border-white transition duration-300 border-2 border-black"
              >
                Abonné
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showUnfollowModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-1/2 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Arrêter de suivre ?</h2>
            <p className="text-gray-600">
              Êtes-vous sûr de vouloir arrêter de suivre cette personne ?
            </p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded mr-4"
                onClick={toggleUnfollowModal}
              >
                Annuler
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => {
                  // Ajoutez ici la logique pour arrêter de suivre
                  toggleUnfollowModal();
                }}
              >
                Arrêter de suivre
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Following;
