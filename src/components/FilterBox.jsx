import { motion } from "framer-motion";
import { CircleX } from "lucide-react";

const FilterBox = ({ setIsActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="w-[150px] min-h-[140px] border-2 absolute right-6 top-12 bg-white flex flex-col gap-2 shadow-lg rounded-md z-50 p-2"
    >
      <div className="flex justify-between items-center">
        <label className="flex gap-2 items-center">
          <input type="radio" name="r1" />
          All
        </label>
        <span onClick={() => setIsActive(false)} className="cursor-pointer">
          <CircleX size={18} />
        </span>
      </div>

      <label className="flex gap-2 items-center">
        <input type="radio" name="r1" />
        Critical
      </label>
      <label className="flex gap-2 items-center">
        <input type="radio" name="r1" />
        Medium
      </label>
      <label className="flex gap-2 items-center">
        <input type="radio" name="r1" />
        Low
      </label>
    </motion.div>
  );
};

export default FilterBox;
