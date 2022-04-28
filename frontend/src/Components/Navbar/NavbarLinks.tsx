import { MdMovie, MdRateReview } from "react-icons/md";
import { BiCube } from "react-icons/bi";
import { IoIosLogIn } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";

export const NavbarLinks: {
  id: string;
  linkIcon: JSX.Element;
  linkName: string;
  link: string;
}[] = [
  {
    id: "discover-link",
    linkIcon: <MdMovie />,
    linkName: "Discover",
    link: "/discover",
  },
  {
    id: "review-link",
    linkIcon: <MdRateReview />,
    linkName: "Reviews",
    link: "/reviews",
  },
  {
    id: "about-link",
    linkIcon: <BiCube />,
    linkName: "About",
    link: "/about",
  },
  {
    id: "login-link",
    linkIcon: <IoIosLogIn />,
    linkName: "Login",
    link: "/login",
  },
  {
    id: "signup-link",
    linkIcon: <AiOutlineUserAdd />,
    linkName: "Sign up",
    link: "/signup",
  },
];
