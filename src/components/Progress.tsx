import { CircularProgress } from "@heroui/progress";

const Progress = ({ value, title }: { value: number; title: string }) => {
  return (
    <div className="w-[120px]">
      <CircularProgress
        classNames={{
          svg: "w-28 h-28 drop-shadow-md",
          indicator: "stroke-[#F6B846]",
          track: "stroke-black/5",
          value: "text-xl font-semibold",
        }}
        showValueLabel={true}
        strokeWidth={2}
        value={value}
      />
      <p className="text-sm mt-2 text-center">{title}</p>
    </div>
  );
};

export default Progress;
