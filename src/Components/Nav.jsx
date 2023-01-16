import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-wrp container-fluid row">
      <div className="col col-sm-6 pb-0">
        <NavLink exact={true} to="/">
          <h4>My Story</h4>
        </NavLink>
      </div>

      <div className="col col-sm-6 row">
        <div className="col text-end">
          <NavLink to="/projects">Projects</NavLink>
        </div>
        <div className="col text-end text-nowrap">
          <NavLink to="/softskills">Soft Skills</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
