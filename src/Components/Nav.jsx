import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-wrp">
      <div className="row">
        <div className="link-cont col-8 ">
          <div className="link-wrp">
            <NavLink exact={true} to="/">
              <h1>My Story</h1>
            </NavLink>
          </div>
        </div>

        <div className="col-4 d-flex justify-content-evenly ">
          <div className="d-flex align-items-center">
            <NavLink to="/projects">Projects</NavLink>
          </div>

          <div className="d-flex align-items-center">
            <NavLink to="/softskills"> Soft Skills </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
