import { BsStars, BsPeopleFill } from "react-icons/bs";
import { CgPlayTrackNextR } from "react-icons/cg";
import { MdMovie } from "react-icons/md";

export let aboutText: string[] = [
  "Keeping track of your favorite tv shows is hard, knowing which ones to watch next is even harder.",
];

export let listAboutText: {
  icon: JSX.Element;
  text: string;
}[] = [
  {
    icon: <MdMovie />,
    text: "Discover new movies and shows!",
  },
  {
    icon: <BsStars />,
    text: "Create your own personalized list with your favorite titles.",
  },
  {
    icon: <CgPlayTrackNextR />,
    text: "Keep track of of what titles you've completed or is currently watching.",
  },
  {
    icon: <BsPeopleFill />,
    text: "Join the community! Write reviews, open discussions and interact with fans across the world.",
  },
];
