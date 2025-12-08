import * as motion from "motion/react-client";
import Categories from "./Categories";
import Searchbar from "./Searchbar";

function Filter({ searchPlaceholder, categories, url, filters }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="layout-container my-10 flex flex-col items-center gap-3"
    >
      <Searchbar placeholder={searchPlaceholder} />
      <Categories categories={categories} url={url} filters={filters} />
    </motion.div>
  );
}

export default Filter;
