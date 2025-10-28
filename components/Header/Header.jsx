import LOGO from "@/public/LOGO v1.png";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="bg-secondary sticky top-0 z-2">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="layout-container flex items-center justify-between py-2 select-none"
      >
        <Link href="#">
          <Image
            src={LOGO}
            alt="SMSH Logo"
            className="h-[30px] w-[30px] sm:h-[43px] sm:w-[43px]"
          />
        </Link>
        <NavBar />
      </motion.header>
    </div>
  );
}

export default Header;
