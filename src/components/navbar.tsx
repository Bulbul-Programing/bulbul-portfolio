
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navbarItem } from "../config/navBarMenu";
import { Lekton } from 'next/font/google'
import Link from "next/link";


const LektonFont = Lekton({
  subsets: ['latin'],
  weight: '700'
});


export const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const currentPage = usePathname();

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      if (scrollValue < this.scrollY) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
      setScrollValue(this.scrollY);
    });
  }

  // Add event listener to scroll

  return (
    <div
      className={`sticky top-0 z-50 bg-white backdrop-blur transition duration-500 ${hideNavbar ? "translate-y-[-110px]" : "top-0 translate-y-0"
        }`}
    >
      <div className="hidden md:block lg:block">
        <ul className={``}>
          {navbarItem.map((item) => (
            <Link href={`#${item.path}`} key={item.element} className={` ${LektonFont.className} border-b p-3 hover:text-[#F6B846] transition-all flex flex-col items-center justify-center`}>
              {item.icon}
              {item.element}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
