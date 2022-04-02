import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { useState } from "react";
import { NavbarLinks } from "./NavbarLinks";

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
        <h2>MVL</h2>
      </div>
      <HiOutlineMenuAlt2 className="menu-icon" onClick={toggleActive} />
      {active ? (
        <div className="mobile-navbar-wrapper">
          {NavbarLinks.map((link) => {
            return (
              <a href="." className="nav-links-wrapper" key={link.id}>
                <div className="nav-link-container">
                  <p className="link-icon">{link.linkIcon}</p>
                  <p>{link.link}</p>
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
