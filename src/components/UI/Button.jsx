/* eslint-disable react/prop-types */
import { cn } from "../../utils/cn";

const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={cn("flex items-center justify-center px-4 py-2", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
