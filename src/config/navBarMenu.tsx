import { FaRegUser } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

export const navbarItem = [
  {
    path: "/",
    element: "About",
    icon: <FaRegUser size={20} />,
  },
  {
    path: "/resume",
    element: "Resume",
    icon: <IoNewspaperOutline size={20} />,
  },
  {
    path: "/contact",
    element: "Contact",
    icon: <FaPaperPlane size={20} />,
  },
  {
    path: "/project",
    element: "Project",
    icon: <FaLaptopCode size={20} />,
  },
];
