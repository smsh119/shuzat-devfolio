"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, onClick, isActive, children }) {
  const pathname = usePathname();
  const [pathToVisit, sectionId] = href?.split("#");

  const isSamePage = pathToVisit === "" || pathToVisit === pathname;

  const className = `${isActive ? "bg-bg text-accent" : "bg-secondary"} hover:text-accent hover:bg-bg px-2 py-1 transition duration-200 ease-linear hover:cursor-pointer sm:rounded`;

  if (isSamePage && sectionId) {
    return (
      <a href={`#${sectionId}`} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default NavLink;
