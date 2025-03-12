import { FaRegUser } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

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
]