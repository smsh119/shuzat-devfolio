const filterByCategoryAndSearch = (items, filters) => {
  return items.filter((item) => {
    const category = filters?.category?.toLowerCase();
    const searchTerm = filters?.search?.toLowerCase();
    let include = true;
    if (!!category) {
      if (
        item?.categories?.map((cat) => cat.toLowerCase()).includes(category)
      ) {
        include = true;
      } else {
        include = false;
      }
    }
    if (include && !!searchTerm) {
      if (
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item?.technologies?.some((tech) =>
          tech.toLowerCase().includes(searchTerm),
        ) ||
        item?.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))
      ) {
        include = true;
      } else {
        include = false;
      }
    }
    return include;
  });
};

export default filterByCategoryAndSearch;
