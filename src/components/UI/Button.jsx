/* eslint-disable react/prop-types */
import { cn } from "../../utils/cn";

const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-md bg-neutral-800 p-2 shadow-md transition-colors hover:bg-neutral-700",
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
