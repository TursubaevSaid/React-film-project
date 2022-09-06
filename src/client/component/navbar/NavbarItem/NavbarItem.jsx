import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarItem({ to, title }) {
  return (
    <li>
      <NavLink className="home-movie" to={to}>
        {title}
      </NavLink>
    </li>
  );
}
