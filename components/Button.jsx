import Link from "next/link";

function Button({
  children,
  type = "button",
  color = "primary",
  size = "sm",
  ...rest
}) {
  let customClass = "";
  // add style based on type prop
  if (color === "primary") customClass = "bg-primary";
  else if (color === "accent") customClass = "bg-accent";

  // add style based on size prop
  if (size === "lg")
    customClass = customClass + " sm:px-8 sm:py-4 sm:text-base";

  if (type === "anchor") {
    return (
      <a
        {...rest}
        className={`${customClass} active:bg-bg hover:ring-text hover:ring-3 rounded-3xl px-4 py-2 text-xs font-bold transition duration-200 ease-linear`}
      >
        {children}
      </a>
    );
  } else if (type === "link") {
    return (
      <Link
        {...rest}
        className={`${customClass} active:bg-bg hover:ring-text hover:ring-3 rounded-3xl px-4 py-2 text-xs font-bold transition duration-200 ease-linear`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        {...rest}
        type={type}
        className={`${customClass} active:bg-bg hover:ring-text hover:ring-3 rounded-3xl px-4 py-2 text-xs font-bold transition duration-200 ease-linear`}
      >
        {children}
      </button>
    );
  }
}

export default Button;
