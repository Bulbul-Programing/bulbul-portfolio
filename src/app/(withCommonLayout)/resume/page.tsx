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
      <Title title="Resume" />
      <Education />
      <Skills />
      <Knowledge />
      <Language />
    </div>
  );
};

export default Resume;
