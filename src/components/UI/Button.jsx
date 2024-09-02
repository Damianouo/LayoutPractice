/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Button = forwardRef(function Button(
  { children, className, onClick, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "rounded-md bg-zinc-800 p-4 shadow-md transition-all hover:bg-zinc-700",
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
