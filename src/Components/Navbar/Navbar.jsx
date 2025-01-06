import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top layout-color w-100">
        <div className="container p-4">
          <NavLink className="navbar-brand text-white fw-bolder fs-2" to="/home">START FRAMEWORK</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => isActive ? "nav-link activel text-white fw-bolder rounded" : "nav-link text-white fw-bolder"} 
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => isActive ? "nav-link activel text-white fw-bolder rounded" : "nav-link text-white fw-bolder"} 
                  to="/portfolio"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => isActive ? "nav-link activel text-white fw-bolder rounded" : "nav-link text-white fw-bolder"} 
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
