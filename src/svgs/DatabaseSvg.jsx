/* eslint-disable react/prop-types */
import { cn } from "../utils/cn";

const DatabaseSvg = ({ className }) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" className={cn("h-6 w-6", className)}>
      <path
        fill="currentColor"
        d="M5 9V7h2v2H5zM9 9h10V7H9v2zM5 15v2h2v-2H5zM19 17H9v-2h10v2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 6a3 3 0 013-3h16a3 3 0 013 3v12a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm3-1h16a1 1 0 011 1v5H3V6a1 1 0 011-1zm-1 8v5a1 1 0 001 1h16a1 1 0 001-1v-5H3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default DatabaseSvg;
