const setAxisSteps = (salary, steps) => {
  const salarySteps = [];
  for (let i = 0; i < steps; i++) {
    salarySteps.push(Math.round((salary - ((salary / steps) * i)) / 100) * 100);
  }
  return salarySteps;
};

export default setAxisSteps;
