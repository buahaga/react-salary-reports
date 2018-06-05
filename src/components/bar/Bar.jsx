import React from 'react';
import PropTypes from 'prop-types';
import './Bar.css';

const Bar = (props) => {
  const width = 40;
  const chartHeight = 200;
  const { height, index, green } = props;
  const y = chartHeight - height;
  const offset = index * width;

  return (
    <g className="bar" transform={`translate(${offset},0)`} style={{ fill: `rgb(0, ${green}, 0)` }}>
      <rect height={height} y={y} width={width} />
    </g>
  );
};

Bar.propTypes = {
  height: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
};

export default Bar;
