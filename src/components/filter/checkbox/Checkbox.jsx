import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = (props) => {
  const { value, checked, onChangeHandler } = props;
  return (
    <label className="checkbox">
      <input id={value} type="checkbox" checked={checked} onChange={onChangeHandler} />
      {value}
    </label>
  );
};

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default Checkbox;
