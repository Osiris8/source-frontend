import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../styles/start.css";
import formatDateToReadableDate from "../utils/utils";
import NavigationTabs from "./NavigationTabs";
import UploadImage from "./UploadImage";
import EditBiography from "./EditBiography";

function Profile() {
  const userProfile = useSelector((state) => state.user.userProfile);
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4 order-2 md:order-1">
          <UploadImage />
        </div>
        <div className=" bg-white p-8 border shadow-md rounded-lg mt-8 w-1/3 p-4 w-full md:w-2/3 p-4 order-1 md:order-2">
          <div className="text-center">
            {userProfile && userProfile.image && (
              <img
                src={userProfile.image.replace("/frontend/public", "")}
                alt="Profile"
                className="w-24 h-24 mx-auto rounded-full mb-4 profileCover"
              />
            )}
            {userProfile && userProfile.firstname && userProfile.lastname && (
              <h2 className="text-2xl font-semibold">
                {userProfile.firstname} {userProfile.lastname}
              </h2>
            )}
            {userProfile && userProfile.email && (
              <p className="text-gray-600">{userProfile.email}</p>
            )}
            {userProfile && userProfile.biographie && (
              <p className="text-gray-600 mt-2">{userProfile.biographie}</p>
            )}
            {userProfile && userProfile.createdAt && (
              <p className="text-gray-600 mt-2">
                Membre depuis le{" "}
                {formatDateToReadableDate(userProfile.createdAt)}
              </p>
            )}
          </div>
          <NavigationTabs />
          <Link
            to="/edit-profile"
            className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition duration-300 mt-4"
          >
            Modifier le profil
          </Link>
        </div>
        <div className="w-full md:w-2/3 p-4 order-1 md:order-3">
          <EditBiography />
        </div>
      </div>
    </>
  );
}

export default Profile;
