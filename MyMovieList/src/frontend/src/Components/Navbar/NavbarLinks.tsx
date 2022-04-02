import { MdLocalMovies, MdRateReview } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrStatusInfoSmall } from "react-icons/gr";
import { IoIosLogIn } from "react-icons/io";
export const NavbarLinks: {
  id: string;
  linkIcon: JSX.Element;
  link: string;
}[] = [
  {
    id: "movie-link",
    linkIcon: <MdLocalMovies />,
    link: "Movies",
  },
  {
    id: "review-link",
    linkIcon: <MdRateReview />,
    link: "Reviews",
  },
  {
    id: "cast-link",
    linkIcon: <BsFillPeopleFill />,
    link: "Casts",
  },
  {
    id: "about-link",
    linkIcon: <GrStatusInfoSmall />,
    link: "About",
  },
  {
    id: "login-link",
    linkIcon: <IoIosLogIn />,
    link: "Login",
  },
];
