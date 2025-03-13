import { CgMenuLeftAlt } from "react-icons/cg";

import CreateKnowledge from "../CreateKnowledge";
const Knowledge = () => {
  return (
    <div className="my-5">
      <div className="flex items-center gap-x-3 shadow-sm border-b rounded-md p-3">
        <CgMenuLeftAlt
          className="text-[#F6B846] border rounded-full border-[#F6B846] p-2"
          size={50}
        />
        <p className="text-xl font-bold">Knowledge</p>
      </div>
      <div className="p-3">
        <CreateKnowledge value="Custom Website Build" />
        <CreateKnowledge value="Frontend Development" />
        <CreateKnowledge value="TypeScript Mastery" />
        <CreateKnowledge value="Backend Powerhouse" />
        <CreateKnowledge value="Database Architect" />
        <CreateKnowledge value="Authentication & Security" />
        <CreateKnowledge value="Performance Optimization" />
        <CreateKnowledge value="Deployment & Version Control" />
      </div>
    </div>
  );
};

export default Knowledge;
