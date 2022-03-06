import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav>
      <NavLink to="/today">Today</NavLink>
      <NavLink to="/messages">All Messages</NavLink>
      <NavLink to="/drafts">Drafts</NavLink>
    </nav>
  );
}

export default Navigation;
