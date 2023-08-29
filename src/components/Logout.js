import React from "react";
import axios from "axios";
import cookies from "js-cookie";

function Logout() {
  const logout = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}api/user/logout`,
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        cookies.remove("token");
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <button onClick={logout}>Logout</button>;
}

export default Logout;
