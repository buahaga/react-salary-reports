import React from 'react';
import PropTypes from 'prop-types';
import SelectYear from '../select-year/SelectYear';
import Chart from '../chart/Chart';
import MonthFilter from '../month-filter/MonthFilter';
import { formatData } from '../../utils/chartHelper';
import { calculateAverageSalary } from '../../utils/salaryHelpers';

const ChartReport = (props) => {
  const {
    data, year, left, right,
  } = props;
  const chartData = formatData(calculateAverageSalary(data));
  const range = chartData.filter(({ salary }) => salary > 0).length;
  return (
    <div>
      <SelectYear year={year} />
      <Chart data={chartData} />
      <MonthFilter
        range={range}
        left={left}
        right={right}
        onFilterChange={props.onFilterChange}
      />
    </div>
  );
};

ChartReport.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
  year: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default ChartReport;
