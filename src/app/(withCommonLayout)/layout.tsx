import { ReactNode } from "react";
import { Lekton } from "next/font/google";

import { Navbar } from "@/src/components/navbar";
import Profile from "@/src/components/Profile";
const lektonFont = Lekton({
  subsets: ["latin"],
  weight: "400",
});

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" bg-[#F6F6F6] lg:py-10 mx-auto min-h-screen max-w-7xl flex-grow">
      <div className=" lg:flex justify-between">
        <Navbar />
        <div className="w-full md:w-full lg:w-5/12 lg:h-screen lg:sticky top-0 lg:overflow-hidden">
          <Profile />
        </div>
        <div
          className={` ${lektonFont.className} w-full md:w-full lg:w-6/12 px-5 lg:overflow-y-auto lg:h-screen`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
