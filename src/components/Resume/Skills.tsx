import Progress from "../Progress";

import Title from "@/src/utils/Title";

const Skills = () => {
  return (
    <div>
      <Title title="Skills" />
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
