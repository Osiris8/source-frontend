import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

import "../styles/start.css";
import formatDateToReadableDate from "../utils/utils";
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
        </div>
        <div className="w-full md:w-2/3 p-4 order-1 md:order-3">
          <EditBiography />
        </div>
      </div>
    </>
  );
}

export default Profile;
