import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Draggable from '../../draggable/Draggable';
import './FilterHandler.css';

class FilterHandler extends Component {
  getStyle() {
    return {
      left: `${this.props.x}px`,
    };
  }

  render() {
    return (
      <Draggable onDrag={this.props.onDrag} onDragEnd={this.props.onMouseUp}>
        <div className="filter-handler" style={this.getStyle()} />
      </Draggable>
    );
  }
}

FilterHandler.propTypes = {
  x: PropTypes.number.isRequired,
  onDrag: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
};

export default FilterHandler;
