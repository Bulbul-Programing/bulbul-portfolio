import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div>
      <div className="flex items-center gap-x-3 shadow-sm border-b rounded-md p-3">
        <FaGraduationCap
          className="text-[#F6B846] border rounded-full border-[#F6B846] p-3"
          size={60}
        />
        <p className="text-xl font-bold">Education</p>
      </div>
      <div className="my-5 shadow-md p-3 rounded-md">
        <p className="text-[#F6B846] rounded-md text-sm px-2 py-[2px] border border-[#F6B846] inline ">
          2022 - Present
        </p>
        <div className="mt-3">
          <p className="text-lg font-semibold">National University</p>
          <p className="text-sm">Department of Finance</p>
        </div>
      </div>
      <div className="my-5 shadow-md p-3 rounded-md">
        <p className="text-[#F6B846] rounded-md text-sm px-2 py-[2px] border border-[#F6B846] inline ">
          2023
        </p>
        <div className="mt-3">
          <p className="text-lg font-semibold">Programming Hero (L-1)</p>
          <p className="text-sm">Frontend Development</p>
        </div>
      </div>
      <div className="my-5 shadow-md p-3 rounded-md">
        <p className="text-[#F6B846] rounded-md text-sm px-2 py-[2px] border border-[#F6B846] inline ">
          2024
        </p>
        <div className="mt-3">
          <p className="text-lg font-semibold">Programming Hero (L-2)</p>
          <p className="text-sm">Full Stack Development</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
