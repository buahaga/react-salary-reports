import { getMonth, getYear } from '../utils/dateHelpers';

export const filterByYear = (data, year = 2018) => (
  data.filter(el => getYear(el.date) === year)
);

export const filterByMonth = (data, year, month) => (
  data.filter(el => getYear(el.date) === year && getMonth(el.date) === month)
);

export const filterByKey = (data, key, value) => {
  if (!key || !value) {
    return data;
  }
  return data.filter(el => el[key] === value);
};

export const filterByMultKeys = (data, key, values) => {
  if (values.length === 0 || !key) {
    return data;
  }
  return data.filter(el => values.indexOf(el[key]) !== -1);
};

export const getInitialFilterState = (array, propertyName) => {
  const obj = {};
  if (!propertyName) {
    return {};
  }
  array.forEach((item) => {
    obj[item[propertyName]] = true;
    return item;
  });
  return obj;
};

export const filterDataByMonth = (array, left, right) => {
  const [newLeft, newRight] = left > right
    ? [right, left]
    : [left, right];
  return array.filter((item) => {
    const month = Number(item.date.split('/')[0]);
    return month >= newLeft && month <= newRight;
  });
};
