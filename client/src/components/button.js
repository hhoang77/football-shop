import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
function button({ children, className, type = "button", onClick, disabled }) {
  const buttonClassName = twMerge(clsx("py-2 px-4 "), className);
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={buttonClassName}
    >
      {children}
    </button>
  );
}

export default button;
