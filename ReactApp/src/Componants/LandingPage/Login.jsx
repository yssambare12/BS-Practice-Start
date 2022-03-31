import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
function Login() {
  return (
    <div className="LoginCont">
      <img
        src="https://raw.githubusercontent.com/Vishal023/Vusic/dc95bf40c3622c1263fa242661c76630250b9e1d/src/components/assets/img/headphonesLogo.svg"
        alt="logo"
      />
      <div>
        <h1>Music for everyone</h1>
        <p>Without music, life would be a mistake</p>
        <button className="btn">
          <Link to={"/home"}>Start Listening</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
