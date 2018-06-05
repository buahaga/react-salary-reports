export const getMonth = (date) => {
  if (!date) {
    return -1;
  }
  return new Date(date).getMonth() + 1;
};

export const getYear = (date) => {
  if (!date) {
    return -1;
  }
  return new Date(date).getFullYear();
};
