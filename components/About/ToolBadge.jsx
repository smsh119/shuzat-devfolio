import Image from "next/image";

function ToolBadge({ logo, name }) {
  return (
    <div className="flex items-center gap-x-1">
      <Image
        width={32}
        height={32}
        className="h-6 w-6 sm:h-8 sm:w-8"
        src={logo}
        alt={`${name} Logo`}
      />
      <span className="text-xs sm:text-lg">{name}</span>
    </div>
  );
}

export default ToolBadge;
