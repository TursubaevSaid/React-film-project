import React from "react";
import navElems from "../navElems";
import NavbarItem from "../NavbarItem";
export default function NavbarList() {
  const navbarElems = navElems.map((item) => (
    <NavbarItem key={item.title} {...item} />
  ));
  return (
    <nav className="NavbarList">
      <div className="navList">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          {navbarElems}
          <li>
            <a href="#" className="brand-logo right">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
