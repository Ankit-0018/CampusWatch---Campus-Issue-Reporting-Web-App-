import { Funnel } from "lucide-react";
import { useState } from "react";
import FilterBox from "../FilterBox";
import { AnimatePresence } from "framer-motion";

const IssueHeader = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex justify-between w-full relative mb-4">
      <input type="text" placeholder="Enter Existing Issue..." />
      <div>
        <span
          className="flex items-center gap-2 cursor-pointer md:hidden"
          onClick={() => setIsActive(true)}
        >
          Filter <Funnel size={16} />
        </span>
      </div>

      <AnimatePresence>
        {isActive && <FilterBox setIsActive={setIsActive} />}
      </AnimatePresence>
    </div>
  );
};

export default IssueHeader;
