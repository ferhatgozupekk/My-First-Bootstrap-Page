import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Hotels.com
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">
                Anasayfa
              </NavLink>
              <NavLink className="nav-link" to="/hakkimizda">
                Hakkımızda
              </NavLink>
              <NavLink className="nav-link" to="/iletisim">
                İletişim
              </NavLink>
              <NavLink className="nav-link ml-auto" to="/giris">
                Profilim
              </NavLink>

              {/* girişte favoriler linki gözükür */}
              {localStorage.getItem("isLoggedIn") === "true" && (
                <NavLink className="nav-link" to="/favoriler">
                  Favoriler
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
