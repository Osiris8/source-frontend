import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login"; // Importez votre composant de connexion
import Home from "./components/Home";
import Register from "./components/Register";
import { UidContext } from "./components/AppContext";

function App() {
  const [user, setUser] = useState(null);

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
        //console.log(error);
        console.log(
          "Une erreur est survenue lors de la vérification de l'authentification."
        );
      }
    };

    checkAuthentication();
  }, [user]);

  return (
    <UidContext.Provider value={user}>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </UidContext.Provider>
  );
}

export default App;
