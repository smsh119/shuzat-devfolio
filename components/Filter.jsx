import * as motion from "motion/react-client";
import Link from "next/link";
import Searchbar from "./Searchbar";

function Filter({ searchPlaceholder, categories = [], url, filters }) {
  const constructQuery = ({ category = null, search = null }) => {
    if (search === null) search = filters?.search;
    if (category === null) category = filters?.category;

    let query = "";
    if (search) {
      query = `?search=${search}`;
    }
    if (category?.toLowerCase() !== "all") {
      if (query === "") query = `?category=${category}`;
      else query = query + `&category=${category}`;
    }
    return query;
  };

  let currentCategory = filters?.category;
  if (!currentCategory) currentCategory = "all";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="layout-container my-10 flex flex-col items-center gap-3"
    >
      <Searchbar placeholder={searchPlaceholder} />
      <div className="flex gap-3 sm:gap-5 lg:gap-8">
        <Link
          href={`${url}${constructQuery({ category: "all" })}`}
          className={`${currentCategory === "all" ? "text-primary" : ""} text-xs capitalize transition-colors duration-200 sm:text-base`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`${url}${constructQuery({ category: cat })}`}
            className={`${currentCategory.toLowerCase() === cat.toLowerCase() ? "text-primary" : ""} text-xs capitalize transition-colors duration-200 sm:text-base`}
          >
            {cat}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default Filter;
