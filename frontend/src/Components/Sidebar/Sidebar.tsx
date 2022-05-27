import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarLinks } from "../Navbar/NavbarLinks";

type SidebarProps = {
  className: string;
};
const Sidebar = ({ className }: SidebarProps) => {
  const [user, setUser] = useState<any | undefined>();
  let navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("/user/profile")
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          console.log(err);
          setUser(undefined);
          console.clear();
        });
    };
    fetch();
  }, [user]);

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
        {NavbarLinks.slice(0, NavbarLinks.length - 4).map((link) => {
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
        {user !== undefined ? (
          <>
            <Link to={NavbarLinks[5].link} key={NavbarLinks[5].id}>
              <div className="link-container">
                <p className="link-icon">{NavbarLinks[5].linkIcon}</p>
                <p className="link-name">{NavbarLinks[5].linkName}</p>
              </div>
            </Link>

            <div
              className="link-container"
              onClick={() => {
                axios
                  .post("http://localhost:8000/user/logout")
                  .then((res) => {
                    if (res.data.sucess === true) {
                      navigate("/");
                    }
                  })
                  .catch((err) => {
                    console.log("error");
                  });
              }}
            >
              <p className="link-icon">{NavbarLinks[6].linkIcon}</p>
              <p className="link-name">{NavbarLinks[6].linkName}</p>
            </div>
          </>
        ) : (
          <>
            <Link to={NavbarLinks[3].link} key={NavbarLinks[3].id}>
              <div className="link-container">
                <p className="link-icon">{NavbarLinks[3].linkIcon}</p>
                <p className="link-name">{NavbarLinks[3].linkName}</p>
              </div>
            </Link>

            <Link to={NavbarLinks[4].link} key={NavbarLinks[4].id}>
              <div className="link-container">
                <p className="link-icon">{NavbarLinks[4].linkIcon}</p>
                <p className="link-name">{NavbarLinks[4].linkName}</p>
              </div>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
