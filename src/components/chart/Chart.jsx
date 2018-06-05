import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getColor, getHeight } from '../../utils/chartHelper';
import { getMaxSalary } from '../../utils/salaryHelpers';
import Tooltip from '../tooltip/Tooltip';
import Bar from '../bar/Bar';
import Axis from '../axis/Axis';
import './Chart.css';

class Chart extends Component {
  renderBar(salary, index, id, maxSalary) {
    const height = getHeight(salary, maxSalary);
    const green = getColor(salary, maxSalary);
    return (
      <Tooltip key={id} index={index} height={height} content={Math.round(salary)}>
        <Bar height={height} green={green} index={index} />
      </Tooltip>
    );
  }

  render() {
    const { data } = this.props;
    const maxSalary = getMaxSalary(data);
    const axisMax = (Math.round(maxSalary / 100) * 100) * 1.05;
    return (
      <div className="chart-wrapper">
        <Axis maxSalary={axisMax} />
        <svg className="chart" width="480" height="200" aria-labelledby="title desc" role="img">
          {data.map((item, i) => this.renderBar(item.salary, i, item.key, axisMax))}
        </svg>
      </div>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    salary: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
  })).isRequired,
};

export default Chart;
