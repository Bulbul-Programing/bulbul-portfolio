import { IoCheckmarkDone } from "react-icons/io5";
const CreateKnowledge = ({ value }: { value: string }) => {
  return (
    <div className="flex gap-x-2 items-center">
      <IoCheckmarkDone className="text-[#F6B846]" size={20} />
      <p className="font-semibold text-lg">{value}</p>
    </div>
  );
};

export default CreateKnowledge;
