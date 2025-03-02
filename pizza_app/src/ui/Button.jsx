import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, onClick }) => {
  const baseStyles =
    "text-sm inline cursor-pointer rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed";

  const styles = {
    primary: baseStyles + "  px-4 py-2  sm:px-6 sm:py-4",
    small: baseStyles + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "text-sm inline cursor-pointer rounded-full font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300  hover:text-stone-800 focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed border-2 border-stone-300 px-4 py-2.5 sm:px-6 sm:py-3.5",
    round: baseStyles + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
