import React from "react";

import Education from "@/src/components/Resume/Education";
import Knowledge from "@/src/components/Resume/Knowledge";
import Language from "@/src/components/Resume/Language";
import Skills from "@/src/components/Resume/Skills";
import Title from "@/src/utils/Title";
const Resume = () => {
  return (
    <div>
      {/* Resume section */}
      <div className="relative my-5">
        <p className="first-letter:text-[#ff6a00]  text-xl font-semibold">
          Resume
        </p>
        <div className=" absolute left-[-10px] top-0 rounded-full bg-gradient-to-r from-[#ffd58c] h-[30px] w-[30px] " />
      </div>
      <Education />
      <Skills />
      <Knowledge />
      <Language />
    </div>
  );
};

export default Resume;
