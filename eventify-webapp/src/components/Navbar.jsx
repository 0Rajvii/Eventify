import React from "react"; 
import { useState, useEffect } from "react";
import "./navbar.css";
import { clearAccessToken, clearUserFromLocalstorage } from "../services/localstorage";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    clearAccessToken();
    clearUserFromLocalstorage();
    window.location.href = '/login';
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-bg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/images/eventify-logo.webp" className="App-logo navbar-logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/events">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">Contact Us</a>
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              {/* <Button
                type="text"
                onClick={handleLogout}
                className="btn btn-light p-2 mx-3"
              >
                Logout
              </Button> */}
              <button type="text" onClick={handleLogout} className="navbar-button-link px-4 mx-3">
                <Link to={"/"} className="text-decoration-none navbar-link">
                  Logout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
