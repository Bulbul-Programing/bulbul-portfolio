import Progress from "../Progress";

import Title from "@/src/utils/Title";

const Skills = () => {
  return (
    <div>
      <div className="relative my-5">
        <p className="first-letter:text-[#ff6a00]  text-xl font-semibold">
          Skills
        </p>
        <div className=" absolute left-[-10px] top-0 rounded-full bg-gradient-to-r from-[#ffd58c] h-[30px] w-[30px] " />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
        <Progress title="HTML / CSS" value={90} />
        <Progress title="JavaScript" value={80} />
        <Progress title="TypeScript" value={75} />
        <Progress title="React / Next Js" value={85} />
        <Progress title="Node JS" value={80} />
        <Progress title="Express JS" value={90} />
        <Progress title="MongoDB" value={90} />
        <Progress title="Redux" value={85} />
      </div>
    </div>
  );
};

export default Skills;
