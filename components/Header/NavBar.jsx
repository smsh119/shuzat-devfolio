import BurgerMenuIcon from "@/public/images/logos/burger-menu.svg";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="relative">
      <Image
        src={BurgerMenuIcon}
        alt="menu"
        className="h-6 w-6 cursor-pointer sm:hidden"
        id="burger-menu"
      />
      {/* <!-- background for the collapsible navbar --> */}
      <div className="bg-secondary -z-1 absolute -top-3 right-0 h-11 w-40 sm:hidden"></div>
      {/* <!-- add collapsible-open class to open the collapsible --> */}
      <div
        id="menu"
        className="-z-2 sm:z-0 absolute -top-[7rem] right-0 flex w-32 flex-col gap-y-0.5 text-right text-xs transition-[top] duration-200 ease-linear sm:relative sm:top-0 sm:flex sm:w-auto sm:flex-row sm:text-base"
      >
        <Link
          href="#about"
          className="bg-secondary hover:text-accent hover:bg-bg active:bg-bg px-2 py-1 transition duration-200 ease-linear hover:cursor-pointer sm:rounded"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="bg-secondary hover:text-accent hover:bg-bg active:bg-bg px-2 py-1 transition duration-200 ease-linear hover:cursor-pointer sm:rounded"
        >
          Projects
        </Link>
        <Link
          href="#linksAndContact"
          className="bg-secondary hover:text-accent hover:bg-bg active:bg-bg px-2 py-1 transition duration-200 ease-linear hover:cursor-pointer sm:rounded"
        >
          Links and Contact
        </Link>
        <Link
          href="#"
          className="bg-secondary hover:text-accent hover:bg-bg active:bg-bg px-2 py-1 transition duration-200 ease-linear hover:cursor-pointer sm:rounded"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
