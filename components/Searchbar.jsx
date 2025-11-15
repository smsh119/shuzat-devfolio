import Image from "next/image";

function Searchbar({ placeholder, url }) {
  // TODO: implement search functionality
  return (
    <div className="relative h-8 w-1/2 max-w-[544px] min-w-[256px]">
      <input
        type="search"
        name="search"
        id="search"
        placeholder={placeholder}
        className="bg-secondary text-text h-full w-full rounded-sm px-2 py-1 text-xs"
      />
      <Image
        src="/images/icons/search-icon.svg"
        alt="search icon"
        width="20"
        height="20"
        className="absolute top-2 right-1 w-4"
      />
    </div>
  );
}

export default Searchbar;
