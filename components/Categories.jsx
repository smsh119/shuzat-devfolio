import constructQuery from "@/lib/constructQuery";
import Link from "next/link";

function Categories({ categories = [], url, filters }) {
  let currentCategory = filters?.category;
  if (!currentCategory) currentCategory = "all";

  return (
    <div className="flex gap-3 sm:gap-5 lg:gap-8">
      <Link
        href={`${url}${constructQuery({ category: "all" }, filters)}`}
        className={`${currentCategory === "all" ? "text-primary" : ""} text-xs capitalize transition-colors duration-200 sm:text-base`}
      >
        All
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat}
          href={`${url}${constructQuery({ category: cat }, filters)}`}
          className={`${currentCategory.toLowerCase() === cat.toLowerCase() ? "text-primary" : ""} text-xs capitalize transition-colors duration-200 sm:text-base`}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}

export default Categories;
