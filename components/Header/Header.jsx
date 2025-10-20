import LOGO from "@/public/LOGO v1.png";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="bg-secondary z-2 sticky top-0">
      <header className="layout-container flex select-none items-center justify-between py-2">
        <Link href="#">
          <Image
            src={LOGO}
            alt="SMSH Logo"
            className="h-[30px] w-[30px] sm:h-[43px] sm:w-[43px]"
          />
        </Link>
        <NavBar />
      </header>
    </div>
  );
}

export default Header;
