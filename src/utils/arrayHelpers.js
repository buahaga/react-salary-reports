const groupByProp = (data, key) => data.reduce((result, item) => {
  const value = item[key];
  if (!result[value]) {
    result[value] = [];
  }
  result[value].push(item);
  return result;
}, {});

export default groupByProp;
