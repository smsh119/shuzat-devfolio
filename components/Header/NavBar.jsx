"use client";

import BurgerMenuIcon from "@/public/images/logos/burger-menu.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

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
        <Link
          href="#about"
          className="bg-secondary hover:text-accent hover:bg-bg active:bg-bg px-2 py-1 transition duration-200 ease-linear hover:cursor-pointer sm:rounded"
          onClick={() => setNavbarCollapsed(true)}
        >
          About
        </Link>
        <Link
          href="#projects"
          className="bg-secondary hover:text-accent hover:bg-bg active:bg-bg px-2 py-1 transition duration-200 ease-linear hover:cursor-pointer sm:rounded"
          onClick={() => setNavbarCollapsed(true)}
        >
          Projects
        </Link>
        <Link
          href="#linksAndContact"
          className="bg-secondary hover:text-accent hover:bg-bg active:bg-bg px-2 py-1 transition duration-200 ease-linear hover:cursor-pointer sm:rounded"
          onClick={() => setNavbarCollapsed(true)}
        >
          Links and Contact
        </Link>
        <Link
          href="#"
          className="bg-secondary hover:text-accent hover:bg-bg active:bg-bg px-2 py-1 transition duration-200 ease-linear hover:cursor-pointer sm:rounded"
          onClick={() => setNavbarCollapsed(true)}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
