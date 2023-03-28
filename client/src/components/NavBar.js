import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    let activeStyle={"color":"#071c01" , "font-weight":"bold"}
  return (
    <nav className="navbar navbar-expand-lg no-gutter fluid d-flex  nav-bar">
        <div class="container-fluid">
      <NavLink to="/movieLists" className="logo navbar-brand">Filimo</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-5">
        <li class="nav-item">
          <NavLink className="nav-link active navLink" aria-current="page" to="/movieLists" style={({isActive})=> isActive ? activeStyle : undefined}>Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active navLink" aria-current="page" to="/addMovie" style={({isActive})=> isActive ? activeStyle : undefined}>Form</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active navLink" aria-current="page" to="/logreg" style={({isActive})=> isActive ? activeStyle : undefined}>Sign In</NavLink>
        </li>
        </ul>
    </div>
    </div>
    </nav>
  );
};

export default NavBar;
