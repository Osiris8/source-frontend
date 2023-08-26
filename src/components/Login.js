import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/start.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.getElementsByClassName("emailError")[0];
    const passwordError = document.querySelector(".passwordError");
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
        if (res.status === 401) {
          console.log(res.data.message);
          emailError.innerHTML = res.data.message;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location.href = "/home";
        }
      })
      .catch((err) => {
        console.log(err);
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="passwordError"></div>
        <div className="flex items-center justify-between">
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
