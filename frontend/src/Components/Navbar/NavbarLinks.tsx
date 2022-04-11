import { MdLocalMovies, MdRateReview } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrStatusInfoSmall } from "react-icons/gr";
import { IoIosLogIn } from "react-icons/io";
export const NavbarLinks: {
  id: string;
  linkIcon: JSX.Element;
  linkName: string;
  link: string;
}[] = [
  {
    id: "discover-link",
    linkIcon: <MdLocalMovies />,
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
    id: "people-link",
    linkIcon: <BsFillPeopleFill />,
    linkName: "People",
    link: "/people",
  },
  {
    id: "about-link",
    linkIcon: <GrStatusInfoSmall />,
    linkName: "About",
    link: "/about",
  },
  {
    id: "login-link",
    linkIcon: <IoIosLogIn />,
    linkName: "Login",
    link: "/login",
  },
];
