const constructQuery = ({ category = null, search = null }, oldFilters) => {
  if (search === null) search = oldFilters?.search;
  if (category === null) category = oldFilters?.category;

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

export default constructQuery;
