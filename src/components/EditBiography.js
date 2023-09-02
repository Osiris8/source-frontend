import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { updateUserBiography } from "../actions/userActions";

function EditBiography() {
  const userProfile = useSelector((state) => state.user.userProfile);
  console.log(userProfile);
  const dispatch = useDispatch();
  const [biographie, setBiographie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      biographie: biographie,
    };

    dispatch(updateUserBiography(data, userProfile._id));
  };

  return (
    <>
      <Navbar />
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Modifier la biographie</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="biography"
              className="block text-gray-700 font-bold"
            >
              Biographie
            </label>
            <textarea
              id="biography"
              name="biography"
              defaultValue={userProfile && userProfile.biographie} // Utilisez la valeur de l'état local ici
              onChange={(e) => setBiographie(e.target.value)}
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

export default EditBiography;
