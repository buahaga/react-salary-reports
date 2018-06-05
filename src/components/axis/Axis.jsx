import React from 'react';
import PropTypes from 'prop-types';
import setAxisSteps from '../../utils/axisHelper';
import './Axis.css';

const Axis = (props) => {
  const steps = 3;
  const style = {
    height: `${100 / steps}%`,
  };
  return (
    <div className="axis">
      {setAxisSteps(props.maxSalary, steps).map(step => <div key={Math.random(steps*5)} style={style} className="axis-item">{step}&#160;</div>)}
    </div>
  );
};

Axis.propTypes = {
  maxSalary: PropTypes.number.isRequired,
};

export default Axis;
