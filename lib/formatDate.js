const formatDate = (date, options = {}) => {
  const { day = true, month = true, year = true } = options;
  const dateObj = {};
  if (day) dateObj.day = "numeric";
  if (month) dateObj.month = "long";
  if (year) dateObj.year = "numeric";
  return new Intl.DateTimeFormat("en-US", dateObj).format(new Date(date));
};

export default formatDate;
