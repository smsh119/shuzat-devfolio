import Image from "next/image";
import Link from "next/link";

const bgColorMap = {
  bg: "bg-bg",
  primary: "bg-primary",
  secondary: "bg-secondary",
  text: "bg-text",
  accent: "bg-accent",
  danger: "bg-danger",
};

function Button({
  children,
  type = "button",
  color = "primary",
  size = "sm",
  isSubmitting = false,
  ...rest
}) {
  let customClass = "";
  // add style based on color prop
  if (color !== undefined) customClass = bgColorMap[color];

  // add style based on size prop
  if (size === "lg")
    customClass = customClass + " sm:px-8 sm:py-4 sm:text-base";

  const commonProps = {
    ...rest,
    disabled: isSubmitting,
    className: `${customClass} active:bg-bg rounded-3xl px-4 py-2 text-xs font-bold transition duration-200 ease-linear relative ${isSubmitting ? "" : "hover:ring-text hover:ring-3 cursor-pointer"}`,
  };

  if (type === "anchor") {
    return <a {...commonProps}>{children}</a>;
  } else if (type === "link") {
    return <Link {...commonProps}>{children}</Link>;
  } else {
    return (
      <button {...commonProps} type={type}>
        <span className={`${isSubmitting ? "opacity-0" : "opacity-100"}`}>
          {children}
        </span>
        {isSubmitting && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/loaders/3-dots-loader.svg"
              width={50}
              height={50}
              alt="loading"
            />
          </span>
        )}
      </button>
    );
  }
}

export default Button;
