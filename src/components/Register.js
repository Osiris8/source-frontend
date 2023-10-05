import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/start.css";
import Login from "./Login";
function Register() {
  const [formSubmit, setFormSubmit] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const firstnameError = document.getElementById("firstnameError");
    const lastnameError = document.getElementById("lastnameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const checkbox = document.getElementById("checkbox");
    const checkboxError = document.getElementById("validCheckbox");

    firstnameError.innerHTML = "";
    lastnameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    if (!checkbox.checked) {
      checkboxError.className = "text-red-700 text-sm font-bold";
      checkboxError.textContent = "You must accept the terms and conditions";
    }
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}api/user/register`,
      withCredentials: true,
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      },
    })
      .then((res) => {
        /*if (res.data.errors) {
          firstnameError.innerHTML = res.data.errors.firstname;
          lastnameError.innerHTML = res.data.errors.lastname;
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location.href = "/login";
        }
        console.log("çaa a été enregistré");*/
        setFormSubmit(true);
      })
      .catch((err) => {
        if (!firstname) {
          firstnameError.innerHTML = "Please enter your firstname";
        } else if (!lastname) {
          lastnameError.innerHTML = "Please enter your lastname";
        } else if (!email) {
          emailError.innerHTML = "Please enter your email";
        } else if (!password) {
          passwordError.innerHTML = "Please enter your password";
        }
        console.log("Erreur lors de l'enregistrement de l'utilisateur");
      });
  };
  return (
    <>
      {formSubmit ? (
        <>
          <Login />
          <h1>Enregistrement réussi avec succès</h1>
        </>
      ) : (
        <>
          <div className="w-full h-full h-screen flex justify-center items-center background-image bg-cyan-500 hover:bg-cyan-600 ">
            <form
              className="bg-white shadow-md rounded px-14 pt-6 pb-8 mb-4 "
              onSubmit={handleRegister}
            >
              <h2 className="text-2xl mb-4 font-extrabold text-center text-cyan-900">
                Source
              </h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstname"
                >
                  Prénom
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstname"
                  type="text"
                  placeholder="Enter your firstname"
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                />
                <span
                  className="passwordError text-red-500 text-sm font-bold my-8"
                  id="firstnameError"
                ></span>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastname"
                >
                  Nom
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastname"
                  type="text"
                  placeholder="Enter your lastname"
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                />
                <span
                  className="passwordError text-red-500 text-sm font-bold my-8"
                  id="lastnameError"
                ></span>
              </div>
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
                  type="text"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <span
                  className="passwordError text-red-500 text-sm font-bold my-8"
                  id="emailError"
                ></span>
              </div>
              <div className="mb-4">
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
                <span
                  className="passwordError text-red-500 text-sm font-bold my-8"
                  id="passwordError"
                ></span>
              </div>

              <div className="mb-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  className="enabled:hover:border-cyan-400  mx-1"
                />

                <label
                  className="text-gray-700 text-sm font-bold "
                  htmlFor="checkbox"
                  id="validCheckbox"
                >
                  I accept the terms and conditions
                </label>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800"
                  href="/login"
                >
                  Se connecter
                </a>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default Register;
