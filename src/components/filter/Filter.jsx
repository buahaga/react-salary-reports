import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './checkbox/Checkbox';
import './Filter.css';

const Filter = (props) => {
  const { filters, onChange } = props;
  return (
    <div className="filter">
      {Object.entries(filters).map(([item, checked]) => (
        <Checkbox
          key={item}
          value={item}
          checked={checked}
          onChangeHandler={() => { onChange(item); }}
        />
      ))}
    </div>
  );
};

Filter.propTypes = {
  filters: PropTypes.shape({
    checked: PropTypes.bool,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
