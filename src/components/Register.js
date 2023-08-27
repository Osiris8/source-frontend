import React from "react";
import "../styles/start.css";
function Register() {
  return (
    <div class="w-full h-full h-screen flex justify-center items-center background-image bg-cyan-500 hover:bg-cyan-600 ">
      <form class="bg-white shadow-md rounded px-14 pt-6 pb-8 mb-4 ">
        <h2 className="text-2xl mb-4 font-extrabold text-center text-cyan-900">
          Source
        </h2>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Nom
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Prénom
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div class="mb-6">
          <input
            id="checkbox"
            type="checkbox"
            class="enabled:hover:border-gray-400  mx-2 checked:bg-gray-500"
          />
          <label class=" text-gray-700 text-sm font-bold " for="checkbox">
            J'accepte les conditions générales et la politique de
            confidentialité
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800"
            href="https://hello.com"
          >
            Se connecter
          </a>
        </div>
      </form>
    </div>
  );
}

export default Register;
