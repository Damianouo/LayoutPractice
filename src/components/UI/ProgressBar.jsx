/* eslint-disable react/prop-types */
import { cn } from "../../utils/cn";

const ProgressBar = ({ className }) => {
  return (
    <div
      className={cn(
        "relative h-[2px] overflow-hidden rounded-md bg-zinc-800",
        className,
      )}
    >
      <div className="absolute left-0 h-full w-1/3 bg-white" />
    </div>
  );
};

export default ProgressBar;
