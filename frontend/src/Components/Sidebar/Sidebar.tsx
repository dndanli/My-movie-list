import { Link } from "react-router-dom";
import { NavbarLinks } from "../Navbar/NavbarLinks";

type SidebarProps = {
  className: string;
};
const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={className}>
      <div className="logo">
        <Link to="/">
          <h2>MVL</h2>
        </Link>
      </div>
      <h2 className="header-2" id="menu">
        Menu
      </h2>
      <ul className="links">
        {NavbarLinks.slice(0, NavbarLinks.length - 2).map((link) => {
          return (
            <Link to={link.link} key={link.id}>
              <div className="link-container">
                <p className="link-icon">{link.linkIcon}</p>
                <p className="link-name">{link.linkName}</p>
              </div>
            </Link>
          );
        })}
      </ul>

      <h2 className="header-2">General</h2>
      <ul className="links">
        {NavbarLinks.slice(-2).map((link) => {
          return (
            <Link to={link.link} key={link.id}>
              <div className="link-container">
                <p className="link-icon">{link.linkIcon}</p>
                <p className="link-name">{link.linkName}</p>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
