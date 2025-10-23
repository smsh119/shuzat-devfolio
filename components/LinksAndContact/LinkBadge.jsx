import Image from "next/image";
import Link from "next/link";

function LinkBadge({ logoUrl, name, href }) {
  return (
    <Link
      href={href}
      className="hover:bg-accent flex flex-col items-center justify-center gap-y-1 rounded-lg p-2 transition duration-200 ease-linear hover:scale-[1.08]"
    >
      <Image
        width={50}
        height={50}
        className="h-10 w-10 sm:h-12 sm:w-12"
        src={logoUrl}
        alt={`${name} Logo`}
      />
      <span>Linkedin</span>
    </Link>
  );
}

export default LinkBadge;
