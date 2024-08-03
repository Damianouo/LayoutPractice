/* eslint-disable react/prop-types */
import { cn } from "../utils/cn";

const SvgWrapper = ({ children, className }) => {
  return (
    <span className={cn("flex h-8 w-8 items-center justify-center", className)}>
      {children}
    </span>
  );
};

export default SvgWrapper;
