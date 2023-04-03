import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const scrollRef = useRef(null);

  const handleClick = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav className="nav-wrp container-fluid row">
      <div className="col col-sm-6 pb-0">
        <Link exact={true} to="/">
          <h4>My Story</h4>
        </Link>
      </div>

      <div className="col col-sm-6 row">
        <div className="col text-end">
          <Link ref={scrollRef} onClick={handleClick} to="/projects">
            Projects
          </Link>
        </div>
        <div className="col text-end text-nowrap">
          <Link ref={scrollRef} onClick={handleClick} to="/softskills">
            Soft Skills
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
