import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg   " >
        <div className="container-fluid ">
        <Link className="nav-link " aria-current="page" href="#" to="/">
               <img
                width="110" height="53"
                  src="https://www.guvi.in/web-build/images/guvi-logo.e8ad68fbd8dc0a5fc2f7c4ffd580c54d.png"
                  className="guvilogo"
                ></img>
                
              </Link>
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
          
          <div className="collapse navbar-collapse text-center " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto me-auto">
              
              <Link className="nav-link" aria-current="page" href="#" to="/">
                All
              </Link>
              <Link
                className="nav-link"
                aria-current="page"
                href="#"
                to="/FullStackDevelopment"
              >
                Full Stack Development
              </Link>
              <Link className="nav-link" href="#" to="/DataScience">
                Data Science
              </Link>
              <Link className="nav-link" href="#" to="/CyberSecurity">
                Cyber Security
              </Link>
              <Link className="nav-link" href="#" to="/Career">
                Career
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
