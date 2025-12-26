"use client";

import useScrollObserver from "@/hooks/useScrollObserver";
import BurgerMenuIcon from "@/public/images/logos/burger-menu.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavLink from "./NavLink";

const navbarHomeSections = [
  { label: "About", sectionId: "about" },
  { label: "Projects", sectionId: "projects" },
  { label: "Links and Contact", sectionId: "linksAndContact" },
];

function NavBar() {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const pathname = usePathname();
  const activeId = useScrollObserver(
    ["hero", "blogs", ...navbarHomeSections.map((sec) => sec.sectionId)],
    ["hero", "blogs"],
  );

  return (
    <nav className="relative">
      <Image
        src={BurgerMenuIcon}
        alt="menu"
        className="h-6 w-6 cursor-pointer sm:hidden"
        id="burger-menu"
        onClick={() => setNavbarCollapsed((prev) => !prev)}
      />
      {/* <!-- background for the collapsible navbar --> */}
      <div className="bg-secondary absolute -top-3 right-0 -z-1 h-11 w-40 sm:hidden"></div>
      {/* <!-- change class collapsible--close to collapsible--open to open the collapsible --> */}
      <div
        id="menu"
        className={`${navbarCollapsed ? "collapsible--close" : "collapsible--open"} absolute right-0 -z-2 flex w-32 flex-col gap-y-0.5 text-right text-xs transition-[top] duration-200 ease-linear sm:relative sm:top-0 sm:z-0 sm:flex sm:w-auto sm:flex-row sm:text-base`}
      >
        {navbarHomeSections.map((sec) => (
          <NavLink
            key={sec.sectionId}
            href={`/#${sec.sectionId}`}
            onClick={() => setNavbarCollapsed(true)}
            isActive={sec.sectionId === activeId}
          >
            {sec.label}
          </NavLink>
        ))}
        <NavLink
          href="/blogs"
          onClick={() => setNavbarCollapsed(true)}
          isActive={activeId === "blogs"}
        >
          Blogs
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
