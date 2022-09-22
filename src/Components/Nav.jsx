import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container-fluid py-2">
      <div className="nav-wrp">
        <div className="row">
          <div className="col-md-9 pb-0">
            <NavLink exact={true} to="/">
              <h4>My Story</h4>
            </NavLink>
          </div>

          <div className="col-md-3 align-self-center">
            <div className="row">
              <div className="col text-end">
                <NavLink to="/projects">Projects</NavLink>
              </div>
              <div className="col">
                <NavLink to="/softskills"> Soft Skills </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
