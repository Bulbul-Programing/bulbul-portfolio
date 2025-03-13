import { Progress } from "@heroui/progress";
import { FaLanguage } from "react-icons/fa";
const Language = () => {
  return (
    <div>
      <div className="flex items-center gap-x-3 shadow-sm border-b rounded-md p-3">
        <FaLanguage
          className="text-[#F6B846] border rounded-full border-[#F6B846] p-2"
          size={50}
        />
        <p className="text-xl font-bold">Language</p>
      </div>
      <div className="mt-6">
        <Progress
          classNames={{
            base: "w-full",
            track: "drop-shadow-md border border-default",
            indicator: "bg-[#F6B846]",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label="English"
          radius="sm"
          showValueLabel={true}
          size="md"
          value={75}
        />
      </div>
      <div className="mt-6">
        <Progress
          classNames={{
            base: "w-full",
            track: "drop-shadow-md border border-default",
            indicator: "bg-[#F6B846]",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label="Bangla"
          radius="sm"
          showValueLabel={true}
          size="md"
          value={90}
        />
      </div>
    </div>
  );
};

export default Language;
