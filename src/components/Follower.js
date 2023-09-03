import React from "react";
import { useSelector } from "react-redux";

function Follower() {
  const followingUsers = useSelector((state) => state.users.allUsers);
  const currentUser = useSelector((state) => state.user.userProfile);

  // Utilisez .filter pour obtenir les utilisateurs suivis par l'utilisateur actuel
  const followers = followingUsers.filter((profile) =>
    currentUser.followers.includes(profile._id)
  );

  return (
    <div>
      {followers.map((profile) => (
        <div
          key={profile._id}
          className="bg-white p-4 flex items-center justify-between rounded-lg m-5"
        >
          <div className="flex items-center">
            <img
              src={profile.image.replace("/frontend/public", "")}
              alt={profile.firstname}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">
                {profile.firstname} {profile.lastname}
              </h2>
              <p className="text-gray-600">{profile.biographie}</p>
            </div>
          </div>
          <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition duration-300">
            Suivre
          </button>
        </div>
      ))}
    </div>
  );
}

export default Follower;
