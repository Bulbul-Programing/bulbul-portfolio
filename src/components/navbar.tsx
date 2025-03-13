"use client";
import { usePathname } from "next/navigation";
import { Lekton } from "next/font/google";
import Link from "next/link";

import { navbarItem } from "../config/navBarMenu";

const LektonFont = Lekton({
  subsets: ["latin"],
  weight: "700",
});

export const Navbar = () => {
  const currentPage = usePathname();

  return (
    <div
      className={`sticky top-0 z-50 bg-white backdrop-blur transition duration-200 translate-y-0`}
    >
      <div>
        <ul className={`flex flex-row md:flex-row lg:flex-col`}>
          {navbarItem.map((item) => (
            <Link
              key={item.element}
              className={` ${LektonFont.className} ${currentPage === item.path && "text-[#F6B846]"} border-b p-3 hover:text-[#F6B846] transition-all flex flex-col items-center justify-center`}
              href={`${item.path}`}
            >
              {item.icon}
              {item.element}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
