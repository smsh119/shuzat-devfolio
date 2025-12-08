"use client";

import useDebounce from "@/hooks/useDebounce";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Searchbar({ placeholder, url }) {
  // TODO: implement search functionality
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") ? searchParams.get("search") : "",
  );
  const router = useRouter();
  const pathname = usePathname();

  const filters = Object.fromEntries(searchParams);

  const constructQuery = ({ category = null, search = null }) => {
    if (search === null) search = filters?.search;
    if (category === null) category = filters?.category;

    let query = "";
    if (search) {
      query = `?search=${search}`;
    }
    if (category && category?.toLowerCase() !== "all") {
      if (query === "") query = `?category=${category}`;
      else query = query + `&category=${category}`;
    }
    return query;
  };

  // Debounce
  const onSearch = useDebounce((searchQuery) => {
    router.push(`${pathname}/${constructQuery({ search: searchQuery })}`);
  }, 2000);

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    onSearch(query?.trim());
  };

  return (
    <div className="relative h-8 w-1/2 max-w-[544px] min-w-[256px]">
      <input
        type="search"
        name="search"
        id="search"
        placeholder={placeholder}
        className="bg-secondary text-text h-full w-full rounded-sm px-2 py-1 text-xs"
        onChange={handleChange}
        value={searchTerm}
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
