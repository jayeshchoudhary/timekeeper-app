import format from "date-fns/format";

export const getDisplayDate = (date) => {
  return format(new Date(date), "MMM, dd, yyyy, hh:mm b");
};
