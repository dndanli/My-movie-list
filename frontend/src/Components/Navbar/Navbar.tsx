import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { useState } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { Link } from "react-router-dom";

type NavbarProps = {
  className: string;
};

const Navbar = ({ className }: NavbarProps) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <div className={className}>
      <div className="logo">
        <Link to="/">
          <h2>MVL</h2>
        </Link>
      </div>

      <HiOutlineMenuAlt2 className="menu-icon" onClick={toggleActive} />
      {/* TODO: animate on close */}
      {active ? (
        <div className="mobile-navbar-wrapper">
          {NavbarLinks.map((link) => {
            return (
              <a href={link.link} className="nav-links-wrapper" key={link.id}>
                <div className="nav-link-container">
                  <p className="link-icon">{link.linkIcon}</p>
                  <p>{link.linkName}</p>
                </div>
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
