import React from 'react';
import PropTypes from 'prop-types';
import Draggable from '../../draggable/Draggable';
import './FilterRange.css';

const FilterRange = (props) => {
  const style = {
    left: `${props.x + 20}px`,
    width: props.width,
  };
  return (
    <Draggable onDrag={props.onDrag} onDragEnd={props.onMouseUp}>
      <div className="filter-range" style={style} />
    </Draggable>
  );
};

FilterRange.propTypes = {
  x: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  onDrag: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
};

export default FilterRange;
