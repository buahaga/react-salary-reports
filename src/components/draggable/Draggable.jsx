import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Draggable extends Component {
  constructor(props) {
    super(props);
    this.startX = 0;
  }

  componentDidMount() {
    this.nv.addEventListener('mousedown', this.onMouseDown);
  }

  componentWillUnmount() {
    this.nv.removeEventListener('mousedown', this.onMouseDown);
  }

  onMouseUp = (event) => {
    document.removeEventListener('mousemove', this.onDrag);
    document.removeEventListener('mouseup', this.onMouseUp);
    this.props.onDragEnd(event.clientX);
  };

  onMouseDown = (event) => {
    document.addEventListener('mousemove', this.onDrag);
    document.addEventListener('mouseup', this.onMouseUp);
    this.startX = event.clientX;
    this.props.onDragStart(event.clientX);
  };

  onDrag = (event) => {
    event.preventDefault();
    const movement = event.clientX - this.startX;
    this.props.onDrag(movement);
  };

  render() {
    return (
      <div className="draggable" ref={elem => this.nv = elem}>
        {this.props.children}
      </div>
    );
  }
}

Draggable.defaultProps = {
  onDragStart: () => {},
  onDrag: () => {},
  onDragEnd: () => {},
};

Draggable.propTypes = {
  onDragStart: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default Draggable;
