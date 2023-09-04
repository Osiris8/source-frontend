import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { uploadPicture } from "../actions/userActions";

function UploadImage() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);

  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    /*data.append("firstname", userProfile && userProfile.firstname);
    data.append("lastname", userProfile && userProfile.lastname);
    data.append("email", userProfile && userProfile.email);
    data.append("biographie", userProfile && userProfile.biographie);*/
    data.append("image", file);

    console.log(data);

    dispatch(uploadPicture(data, userProfile && userProfile._id));
  };

  return (
    <>
      <div className="bg-white p-8 border shadow-md rounded-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Modifier le profil</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="picture" className="block text-gray-700 font-bold">
              Photo de profil
            </label>
            <input
              accept=".jpg, .jpeg, .png"
              type="file"
              id="picture"
              name="picture"
              onChange={(e) => setFile(e.target.files[0])}
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition duration-300"
          >
            Enregistrer les modifications
          </button>
        </form>
      </div>
    </>
  );
}

export default UploadImage;
