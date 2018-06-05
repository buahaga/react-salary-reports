export const getColor = (current, max) => {
  const maxGreen = 55;
  const minGreen = 255;
  if (current === 0 || max === 0) {
    return 255;
  }
  const currentToMax = current / max;
  return minGreen - ((minGreen - maxGreen) * currentToMax);
};

export const getHeight = (current, max) => {
  const maxHeight = 200;
  if (max === 0) {
    return 0;
  }
  const currentToMax = current / max;
  return maxHeight * currentToMax;
};

export const formatData = data => Object.entries(data).map(([
  key, {
    sum,
    qty,
  },
]) => {
  if (qty > 0) {
    return {
      salary: sum / qty,
      key,
    };
  }
  return { salary: 0, key };
});
