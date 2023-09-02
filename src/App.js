import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux"; // Importez le hook useDispatch
import { getUserProfile } from "./actions/userActions"; // Importez votre action pour mettre à jour l'état de l'utilisateur
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import EditBiography from "./components/EditBiography";
import { UidContext } from "./components/AppContext";

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch(); // Utilisez le hook useDispatch ici

  useEffect(() => {
    // Fonction pour vérifier l'authentification de l'utilisateur
    const checkAuthentication = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}api/user/verify`,
          {
            withCredentials: true,
          }
        );

        if (response.data.user) {
          setUser(response.data.user._id);
        }
      } catch (error) {
        console.log(
          "Une erreur est survenue lors de la vérification de l'authentification."
        );
      }
    };

    checkAuthentication();
    if (user) {
      dispatch(getUserProfile(user)); // Utilisez dispatch pour mettre à jour l'état de l'utilisateur
    }
  }, [user, dispatch]); // Assurez-vous d'inclure le dispatch dans le tableau de dépendances

  return (
    <UidContext.Provider value={user}>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/edit-bio" element={<EditBiography />} />
        </Routes>
      </Router>
    </UidContext.Provider>
  );
}

export default App;
