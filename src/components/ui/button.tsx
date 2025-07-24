import React, { type ComponentProps } from "react";
import { cn } from "../../lib/utils";

interface Props extends ComponentProps<"button"> {
  className?: string;
}

export const Button: React.FC<Props> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "p-[6px] cursor-pointer inline-flex justify-center items-center rounded-xl transition-all transition-300",
        className
      )}
      {...props}
    ></button>
  );
};
