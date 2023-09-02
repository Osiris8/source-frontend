import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../styles/start.css";
import formatDateToReadableDate from "../utils/utils";

function Profile() {
  const userProfile = useSelector((state) => state.user.userProfile);

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto bg-white p-8 border shadow-md rounded-lg mt-8">
        <div className="text-center">
          {userProfile && (
            <img
              src={userProfile.image.replace("/frontend/public", "")}
              alt="Profile"
              className="w-24 h-24 mx-auto rounded-full mb-4 profileCover"
            />
          )}
          {userProfile && (
            <h2 className="text-2xl font-semibold">
              {userProfile.firstname} {userProfile.lastname}
            </h2>
          )}
          {userProfile && <p className="text-gray-600">{userProfile.email}</p>}
          {userProfile && userProfile.biographie && (
            <p className="text-gray-600 mt-2">{userProfile.biographie}</p>
          )}
          {userProfile && userProfile.createdAt && (
            <p className="text-gray-600 mt-2">
              Membre depuis le {formatDateToReadableDate(userProfile.createdAt)}
            </p>
          )}
        </div>
        <div className="mt-6">
          {userProfile && (
            <p className="text-lg font-semibold mb-2">
              Following: {userProfile.following.length}
            </p>
          )}
          {userProfile && (
            <p className="text-lg font-semibold mb-2">
              Followers: {userProfile.followers.length}
            </p>
          )}
        </div>
        <Link
          to="/edit-profile"
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition duration-300 mt-4"
        >
          Modifier le profil
        </Link>
      </div>
    </>
  );
}

export default Profile;
