/* eslint-disable react/prop-types */
import { cn } from "../utils/cn";

const ChevronLeftSvg = ({ className }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      className={cn("h-6 w-6", className)}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M328 112L184 256l144 144"
      />
    </svg>
  );
};

export default ChevronLeftSvg;
