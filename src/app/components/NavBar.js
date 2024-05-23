import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const onLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          src={"https://cdn.nuawoman.com/global/img/header/NuaLogo2021-TM.png"}
          alt=""
          className="logo my-1"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav gap-5">
            <li className="nav-item" role="button">
              <Link to={"/"} className="navTitle">
                Home
              </Link>
            </li>
            <li className="nav-item" role="button">
              <Link to={"/about"} className="navTitle">
                About Me
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="navbar-nav gap-5">
            <li
              className="nav-item navTitle logoutDiv"
              role="button"
              onClick={onLogoutClick}
            >
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
