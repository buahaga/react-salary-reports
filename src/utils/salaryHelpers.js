import groupByProp from './arrayHelpers';
import { getMonth } from './dateHelpers';

const initMonthData = () => {
  const result = {};
  const monthInYear = 12;
  for (let i = 1; i <= monthInYear; i++) {
    result[i] = {
      sum: 0,
      qty: 0,
    };
  }
  return result;
};

export const averageSalary = (data) => {
  if (data.length === 0) {
    return 0;
  }
  return data.reduce((sum, { salary }) => sum += salary, 0) / data.length;
};

export const calculateAverageSalary = (data) => {
  const result = initMonthData();
  data.forEach((item) => {
    const month = getMonth(item.date);
    result[month].sum += item.salary;
    result[month].qty++;
  });

  return result;
};

export const agregateSalaryByKey = (data, key) => {
  const groupedData = groupByProp(data, key);

  return Object.entries(groupedData).reduce((result, [propertyName, values]) => {
    result[propertyName] = Math.round(averageSalary(values));
    return result;
  }, {});
};

export const getMaxSalary = (data) => {
  if (data.length === 0) {
    return 0;
  }
  return Math.max.apply(null, data.map(el => el.salary));
};
