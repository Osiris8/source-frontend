import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/start.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Nettoyer les messages d'erreur précédents
    const emailError = document.querySelector(".emailError");
    const passwordError = document.querySelector(".passwordError");
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}api/user/login`,
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        // Rediriger vers la page d'accueil en cas de succès
        window.location.href = "/home";
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          /*console.log("Échec de la connexion :", err.response.data.message);
          emailError.innerHTML = err.response.data.message;
          passwordError.innerHTML = err.response.data.errors.password;
          console.log(err);*/
          passwordError.innerHTML = "Email or password incorrect";
        } else {
          passwordError.innerHTML = "Problème de connexion";
        }
      });
  };

  return (
    <div className="w-full h-full h-screen flex justify-center items-center background-image bg-cyan-500 hover:bg-cyan-600 ">
      <form
        className="bg-white shadow-md rounded px-14 pt-6 pb-8 mb-4 "
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl mb-4 font-extrabold text-center text-cyan-900">
          Source
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <span className="emailError text-red-500 text-sm font-bold mb-2 "></span>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <span className="passwordError text-red-500 text-sm font-bold my-8"></span>
        <div className="flex items-center justify-between mt-2">
          <button
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800"
            href="https://hello.com"
          >
            Forgot Password?
          </a>
        </div>
        <div className="flex items-center justify-center m-5">
          <a
            className="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800"
            href="https://hello.com"
          >
            S'inscrire
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
